from pydantic import BaseModel, Field


class SubjectCreate(BaseModel):
    name: str = Field(..., max_length=120)


class SubjectRead(SubjectCreate):
    id: int

    model_config = {"from_attributes": True}


class TopicCreate(BaseModel):
    name: str = Field(..., max_length=120)
    subject_id: int


class TopicRead(TopicCreate):
    id: int

    model_config = {"from_attributes": True}


class SubtopicCreate(BaseModel):
    name: str = Field(..., max_length=120)
    topic_id: int


class SubtopicRead(SubtopicCreate):
    id: int

    model_config = {"from_attributes": True}


class MCQCreate(BaseModel):
    question: str
    options: list[str]
    correct_option: str = Field(..., max_length=120)
    explanation: str | None = None
    difficulty: str = Field(..., max_length=40)
    subtopic_id: int


class MCQRead(MCQCreate):
    id: int

    model_config = {"from_attributes": True}


class ExamBlueprintCreate(BaseModel):
    name: str = Field(..., max_length=160)
    exam_body: str = Field(..., max_length=120)
    description: str | None = None


class ExamBlueprintRead(ExamBlueprintCreate):
    id: int

    model_config = {"from_attributes": True}


class ExamCreate(BaseModel):
    title: str = Field(..., max_length=160)
    time_limit_minutes: int
    negative_marking: int = 0
    attempt_limit: int = 1
    blueprint_id: int


class ExamRead(ExamCreate):
    id: int

    model_config = {"from_attributes": True}


class AnalyticsOverview(BaseModel):
    mcq_count: int
    exam_count: int
    subject_count: int
    topic_count: int
    subtopic_count: int
