from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

follows = db.Table('follows',
    db.Column('followed_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    followed = db.relationship(
        'Users', secondary=follows, 
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic'
    )

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            # do not serialize the password, its a security breach
        }
    

class MyGames(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    game_id = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Float, nullable=True)
    review = db.Column(db.String(500), nullable=True)
    liked = db.Column(db.Boolean, nullable=True)

    def __repr__(self):
        return f'<MyGames {self.game_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "game_id": self.game_id,
            "rating": self.rating,
            "review": self.review,
            "liked": self.liked
        }