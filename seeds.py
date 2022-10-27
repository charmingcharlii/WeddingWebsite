from server.models import Guest
from server.db import Session, Base, engine

# drop and rebuild tables
Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)

db = Session()

# insert users
db.add_all([
  Guest(first_name='charli', last_name='dunlap', attending=True, anything_else= 'idk just need something here',song_req_one='booty me down - kstylis', song_req_two='snatched - big boss vette'),
  Guest(first_name='lee', last_name='castro', attending=True, anything_else= 'idk just need something here',song_req_one='septmber - earth, wind, and fire', song_req_two='baby, i love your way - peter frampton'),
])

db.commit()

db.close()