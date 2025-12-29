from sqlalchemy import JSON, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db import Base


class Subject(Base):
    __tablename__ = "subjects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    topics: Mapped[list["Topic"]] = relationship(back_populates="subject")


class Topic(Base):
    __tablename__ = "topics"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    subject_id: Mapped[int] = mapped_column(ForeignKey("subjects.id"), nullable=False)

    subject: Mapped[Subject] = relationship(back_populates="topics")
    subtopics: Mapped[list["Subtopic"]] = relationship(back_populates="topic")


class Subtopic(Base):
    __tablename__ = "subtopics"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    topic_id: Mapped[int] = mapped_column(ForeignKey("topics.id"), nullable=False)

    topic: Mapped[Topic] = relationship(back_populates="subtopics")
    mcqs: Mapped[list["MCQ"]] = relationship(back_populates="subtopic")


class MCQ(Base):
    __tablename__ = "mcqs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    question: Mapped[str] = mapped_column(Text, nullable=False)
    options: Mapped[list[str]] = mapped_column(JSON, nullable=False)
    correct_option: Mapped[str] = mapped_column(String(120), nullable=False)
    explanation: Mapped[str | None] = mapped_column(Text, nullable=True)
    difficulty: Mapped[str] = mapped_column(String(40), nullable=False)
    subtopic_id: Mapped[int] = mapped_column(ForeignKey("subtopics.id"), nullable=False)

    subtopic: Mapped[Subtopic] = relationship(back_populates="mcqs")


class ExamBlueprint(Base):
    __tablename__ = "exam_blueprints"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(160), nullable=False)
    exam_body: Mapped[str] = mapped_column(String(120), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)

    exams: Mapped[list["Exam"]] = relationship(back_populates="blueprint")


class Exam(Base):
    __tablename__ = "exams"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(160), nullable=False)
    time_limit_minutes: Mapped[int] = mapped_column(Integer, nullable=False)
    negative_marking: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    attempt_limit: Mapped[int] = mapped_column(Integer, nullable=False, default=1)
    blueprint_id: Mapped[int] = mapped_column(
        ForeignKey("exam_blueprints.id"), nullable=False
    )

    blueprint: Mapped[ExamBlueprint] = relationship(back_populates="exams")
