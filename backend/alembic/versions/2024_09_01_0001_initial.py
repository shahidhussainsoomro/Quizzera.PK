"""initial schema

Revision ID: 2024_09_01_0001
Revises: 
Create Date: 2024-09-01 00:01:00.000000
"""

from alembic import op
import sqlalchemy as sa


revision = "2024_09_01_0001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "subjects",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("name", sa.String(length=120), nullable=False, unique=True),
    )
    op.create_table(
        "topics",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("name", sa.String(length=120), nullable=False),
        sa.Column("subject_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["subject_id"], ["subjects.id"]),
    )
    op.create_table(
        "subtopics",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("name", sa.String(length=120), nullable=False),
        sa.Column("topic_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["topic_id"], ["topics.id"]),
    )
    op.create_table(
        "mcqs",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("question", sa.Text(), nullable=False),
        sa.Column("explanation", sa.Text(), nullable=True),
        sa.Column("difficulty", sa.String(length=40), nullable=False),
        sa.Column("subtopic_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["subtopic_id"], ["subtopics.id"]),
    )
    op.create_table(
        "exam_blueprints",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("name", sa.String(length=160), nullable=False),
        sa.Column("exam_body", sa.String(length=120), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
    )
    op.create_table(
        "exams",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("title", sa.String(length=160), nullable=False),
        sa.Column("time_limit_minutes", sa.Integer(), nullable=False),
        sa.Column("negative_marking", sa.Integer(), nullable=False),
        sa.Column("attempt_limit", sa.Integer(), nullable=False),
        sa.Column("blueprint_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["blueprint_id"], ["exam_blueprints.id"]),
    )


def downgrade() -> None:
    op.drop_table("exams")
    op.drop_table("exam_blueprints")
    op.drop_table("mcqs")
    op.drop_table("subtopics")
    op.drop_table("topics")
    op.drop_table("subjects")
