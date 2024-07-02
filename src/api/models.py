from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String

db = SQLAlchemy()

followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
    )

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    followed = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic'
    )

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username,
            'is_active': self.is_active,
        }

class Favorite(db.Model):
    __tablename__ = "favorites"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey("game.id"), nullable=False)

    user = db.relationship("User", backref="favorites", lazy=True)
    game = db.relationship("Game", backref="favorites", lazy=True)

    def __repr__(self):
        return f'<Favorite {self.user_id} - {self.game_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "game_id": self.game_id
        }


class Game(db.Model):
    __tablename__ = "game"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    popularity = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Game {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "genre": self.genre,
            "rating": self.rating,
            "year": self.year,
            "popularity": self.popularity
        }
    
    class Mygames(db.Model):
        __tablename__ = "Mygames"

        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String, nullable=False)
        rating = db.Column(db.Float, nullable=True)
        favorite = db.Column(db.Boolean, nullable=True)
        review = db.Column(db.String, nullable=True)

        game_id = db.Column(db.Integer, db.ForeignKey('game.id'), nullable=False)
        game = db.relationship('Game', backref=db.backref('mygames', lazy=True))

        user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
        user = db.relationship('User', backref=db.backref('mygames', lazy=True))

        def __repr__(self):
            return f'<Mygames {self.title}>'
        
        def serialize(self):
            return{
                "id": self.id,
                "title": self.title,
                "rating": self.rating,
                "favorite": self.favorite,
                "review": self.review
            }


# class Reviews(db.Model):
