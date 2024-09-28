FROM python:3.12.3

ENV LANG C.UTF-8

COPY . .

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN pip install --pip

RUN apt-get update \
    && apt-get install -y libpq-dev gcc

RUN pip install -r requirements/common.txt

EXPOSE 8000

CMD ["./entrypoint.sh"]
