from server.db import Base
from sqlalchemy import Column, Integer, String, Boolean

class Guest(Base):
    __tablename__ = 'guests'
    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    attending = Column(Boolean, default=True)
    anything_else = Column(String(280), nullable=True)
    song_req_one = Column(String(100), nullable=True)
    song_req_two = Column(String(100), nullable=True)
