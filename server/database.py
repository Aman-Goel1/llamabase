from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

#postgres://nikhilbishnoi@localhost:5432

DATABASE_URL = "postgresql://nikhilbishnoi@localhost:5432"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autflush=False, bind=engine)
Base = declarative_base()