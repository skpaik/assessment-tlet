# tlet

## Test project for Backend(fastAPI) and Frontend (React)

### How to run

### Step 1:
- ```cd backend```
- ```python3 -m venv .venv```
- ```source .venv/bin/activate```
- ```pip install -r requirements.txt```
- ```bash run.sh```

### Step 2
- ```cd frontend```
- ```npm install```
- ```bash run.sh```

## Part 1: React Frontend Development
- All works except click on bar is not working.
- I showed the numbers at bottom for details click
- Click on bar is possible, by using different react library. I will push that change later

 
## Part 2: Python Backend Development
- All implemented
- Performance: 
  - I will implement ElasticCache in API Gateway level

## Part 3: Integration and Architecture
- All implemented
- Architectural Design
  - ![Diagram](https://github.com/skpaik/tlet/blob/main/ss/architecture_diagram.jpg?raw=true)
  - Database scaling will handing by cloud platform


## Part 4: Logical Problem
- Like wll change on every moment as user will continue like
- A separate API will be responsible for update the like for any numbers
- Table will have 3 property like `id, number, and like_count`
- I will run a sql query like `select * from number_like orderBy like_count desc limit 10`
- Here we can not cache the like by running any algorithm as every moment like is increasing or decresing


## UI
- Home Page
  - ![Diagram](https://github.com/skpaik/tlet/blob/main/ss/home.png?raw=true)
- Detail Page
  - ![Diagram](https://github.com/skpaik/tlet/blob/main/ss/detail.png?raw=true)
- Popular Page
  - ![Diagram](https://github.com/skpaik/tlet/blob/main/ss/popular.png?raw=true)