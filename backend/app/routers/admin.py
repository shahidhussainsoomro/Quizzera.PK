from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func
from sqlalchemy.orm import Session

from app import models, schemas
from app.deps import get_db

router = APIRouter()

@router.get("/overview")
def admin_overview() -> dict:
    return {
        "modules": [
            "governance",
            "mcq-management",
            "exam-blueprints",
            "quality-compliance",
            "analytics",
            "billing",
            "integrations",
        ]
    }


@router.post("/taxonomy/subjects", response_model=schemas.SubjectRead)
def create_subject(
    payload: schemas.SubjectCreate, db: Session = Depends(get_db)
) -> models.Subject:
    subject = models.Subject(name=payload.name)
    db.add(subject)
    db.commit()
    db.refresh(subject)
    return subject


@router.get("/taxonomy/subjects", response_model=list[schemas.SubjectRead])
def list_subjects(db: Session = Depends(get_db)) -> list[models.Subject]:
    return db.query(models.Subject).order_by(models.Subject.name).all()


@router.post("/taxonomy/topics", response_model=schemas.TopicRead)
def create_topic(
    payload: schemas.TopicCreate, db: Session = Depends(get_db)
) -> models.Topic:
    if not db.get(models.Subject, payload.subject_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subject not found")
    topic = models.Topic(name=payload.name, subject_id=payload.subject_id)
    db.add(topic)
    db.commit()
    db.refresh(topic)
    return topic


@router.get("/taxonomy/topics", response_model=list[schemas.TopicRead])
def list_topics(db: Session = Depends(get_db)) -> list[models.Topic]:
    return db.query(models.Topic).order_by(models.Topic.name).all()


@router.post("/taxonomy/subtopics", response_model=schemas.SubtopicRead)
def create_subtopic(
    payload: schemas.SubtopicCreate, db: Session = Depends(get_db)
) -> models.Subtopic:
    if not db.get(models.Topic, payload.topic_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Topic not found")
    subtopic = models.Subtopic(name=payload.name, topic_id=payload.topic_id)
    db.add(subtopic)
    db.commit()
    db.refresh(subtopic)
    return subtopic


@router.get("/taxonomy/subtopics", response_model=list[schemas.SubtopicRead])
def list_subtopics(db: Session = Depends(get_db)) -> list[models.Subtopic]:
    return db.query(models.Subtopic).order_by(models.Subtopic.name).all()


@router.post("/mcqs", response_model=schemas.MCQRead)
def create_mcq(payload: schemas.MCQCreate, db: Session = Depends(get_db)) -> models.MCQ:
    if not db.get(models.Subtopic, payload.subtopic_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subtopic not found")
    mcq = models.MCQ(
        question=payload.question,
        options=payload.options,
        correct_option=payload.correct_option,
        explanation=payload.explanation,
        difficulty=payload.difficulty,
        subtopic_id=payload.subtopic_id,
    )
    db.add(mcq)
    db.commit()
    db.refresh(mcq)
    return mcq


@router.get("/mcqs", response_model=list[schemas.MCQRead])
def list_mcqs(db: Session = Depends(get_db)) -> list[models.MCQ]:
    return db.query(models.MCQ).order_by(models.MCQ.id.desc()).all()


@router.get("/mcqs/{mcq_id}", response_model=schemas.MCQRead)
def get_mcq(mcq_id: int, db: Session = Depends(get_db)) -> models.MCQ:
    mcq = db.get(models.MCQ, mcq_id)
    if not mcq:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="MCQ not found")
    return mcq


@router.put("/mcqs/{mcq_id}", response_model=schemas.MCQRead)
def update_mcq(
    mcq_id: int, payload: schemas.MCQCreate, db: Session = Depends(get_db)
) -> models.MCQ:
    mcq = db.get(models.MCQ, mcq_id)
    if not mcq:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="MCQ not found")
    if not db.get(models.Subtopic, payload.subtopic_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subtopic not found")
    mcq.question = payload.question
    mcq.options = payload.options
    mcq.correct_option = payload.correct_option
    mcq.explanation = payload.explanation
    mcq.difficulty = payload.difficulty
    mcq.subtopic_id = payload.subtopic_id
    db.commit()
    db.refresh(mcq)
    return mcq


@router.delete("/mcqs/{mcq_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_mcq(mcq_id: int, db: Session = Depends(get_db)) -> None:
    mcq = db.get(models.MCQ, mcq_id)
    if not mcq:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="MCQ not found")
    db.delete(mcq)
    db.commit()
    return None


@router.post("/exam-blueprints", response_model=schemas.ExamBlueprintRead)
def create_exam_blueprint(
    payload: schemas.ExamBlueprintCreate, db: Session = Depends(get_db)
) -> models.ExamBlueprint:
    blueprint = models.ExamBlueprint(
        name=payload.name, exam_body=payload.exam_body, description=payload.description
    )
    db.add(blueprint)
    db.commit()
    db.refresh(blueprint)
    return blueprint


@router.get("/exam-blueprints", response_model=list[schemas.ExamBlueprintRead])
def list_exam_blueprints(db: Session = Depends(get_db)) -> list[models.ExamBlueprint]:
    return db.query(models.ExamBlueprint).order_by(models.ExamBlueprint.name).all()


@router.post("/exams", response_model=schemas.ExamRead)
def create_exam(
    payload: schemas.ExamCreate, db: Session = Depends(get_db)
) -> models.Exam:
    if not db.get(models.ExamBlueprint, payload.blueprint_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blueprint not found")
    exam = models.Exam(
        title=payload.title,
        time_limit_minutes=payload.time_limit_minutes,
        negative_marking=payload.negative_marking,
        attempt_limit=payload.attempt_limit,
        blueprint_id=payload.blueprint_id,
    )
    db.add(exam)
    db.commit()
    db.refresh(exam)
    return exam


@router.get("/exams", response_model=list[schemas.ExamRead])
def list_exams(db: Session = Depends(get_db)) -> list[models.Exam]:
    return db.query(models.Exam).order_by(models.Exam.id.desc()).all()


@router.get("/analytics/overview", response_model=schemas.AnalyticsOverview)
def analytics_overview(db: Session = Depends(get_db)) -> schemas.AnalyticsOverview:
    return schemas.AnalyticsOverview(
        mcq_count=db.query(func.count(models.MCQ.id)).scalar() or 0,
        exam_count=db.query(func.count(models.Exam.id)).scalar() or 0,
        subject_count=db.query(func.count(models.Subject.id)).scalar() or 0,
        topic_count=db.query(func.count(models.Topic.id)).scalar() or 0,
        subtopic_count=db.query(func.count(models.Subtopic.id)).scalar() or 0,
    )
