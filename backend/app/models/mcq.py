from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class Topic(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    subject: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Subtopic(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    topic_id: Optional[int] = Field(default=None, foreign_key="topic.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Difficulty(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    label: str
    level: int = 1


class Tag(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    label: str


class MCQ(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    prompt: str
    status: str = "draft"
    topic_id: Optional[int] = Field(default=None, foreign_key="topic.id")
    subtopic_id: Optional[int] = Field(default=None, foreign_key="subtopic.id")
    difficulty_id: Optional[int] = Field(default=None, foreign_key="difficulty.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)


class MCQVersion(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    mcq_id: Optional[int] = Field(default=None, foreign_key="mcq.id")
    version: int = 1
    options_json: str
    answer_key: str
    explanation: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
