[<<< Back to Table of Contents](index.md)
# Roles and permissions 

## Overview
Every role contains specific set of permissions defined for the whole system. 
If a user is assigned with several roles, all permissions 
will be summed up.
All roles (except for the **'admin'** role) 
can be changed and assigned only by the user with **'admin'** role.
 
### List of available roles:
* 'new'
* 'learner'
* 'student'
* 'teacher'
* 'course'
* 'quiz'
* 'flash'
* 'admin'

### 1. New 
Initial role after registration. 
This role Created to protect the app from low-quality profiles.
The purpose of this role is to impose restrictions onto new account before it has been validated.  
In order to be assigned with the role **'new'** users have to 
register on [https://pasv.us/user/register], upon registration they will receive role **'new'** by default.
All required fields have to be filled out to create the account.
After registration, user getting assigned with **'new'** role.
The role **'new'** only allows users to access and edit theirs profile information.  
Viewing site materials is not allowed for this role.
After registration, user receives confirmation by email.  
The role **'new'** can be upgraded to **'learner'** role only with **'admin'**.

### 2. Learner
 The role **'learner'** has restricted permissions and rights:
  * course: get all ,  
  * lectures: get all, 
  * diary: create  
  * quiz: get, create answer, 
  * flash: get, create training
  
Learners have access to all courses, included lectures, tests, cards, conspects and quizzes.
This role enables user to create diary post, but editing after it has been published is not permitted. 
 
### 3. Student
The participants of studying process should get the role **'student'**. \
After a user is assigned with **'student'** role he/she gets access to the _Groups_ section.
section in addition to all sections that were accessible for him/her with **'learner'** role.  
The list of groups in _Groups_ section visible for particular user depends on groups 
he has access to. \
Every group has specific Access Type, _Members_ and _Observers_ parameters. 
If the group has **'student'** Access type, all users with **'student'** role do see it in the list. 
If the group has _Member_ Access type, only students assigned as _Members_ to the group 
can see it in the list.\
Every group has the following sections: _Description, Rating, Lectures, Quiz_. 
All these sub-pages are visible for the user with **'student'** role who has access 
to the correspondent group. Student account appears on a Rating page only in case 
he is recorded as a member in Members parameter of a group.  \
User with **'student'** role gets access to _Homework_ part of a lecture page 
_(route to lectures page: Group -> Lectures - > select the lecture)_. 


### 4. Teacher
 The role **'teacher'** can access users list in Courses, Groups and their progress. 
 Also, **'teacher'** can see all Daily reports in Dairy. 
 This role can access, create, update _Lectures_, _Homeworks_ and _Quizzes_.
 
 _Permissions for **'teacher'** role:_
 * Auth
 * Get all users
 * Courses: get all courses
 * Groups: get all groups
 * Lecture: create, update, get 
 * Homework: create, update, get 
 * Diary: get all
 * Quiz: create, update, get, answer

### 5. Quiz
Any user assigned with the role **'quiz'** can access, edit, 
delete as well as create new quiz. However, users with the role **'quiz'** 
cannot change or see their profile settings and info, have no access 
to lectures, courses and any other project section except for _Quiz_ section and _homepage_. 
The role **'quiz'** can be only assigned to a user by administrator, or assigned 
manually by database administrator.
          
_Permissions for **'quiz'** role:_
* _User:_ auth;
* _Quiz question, - answer, - question group, - answer group:_ 
all permissions are granted. _(* See Permissions Matrix below)_

### 6. Course
Users with the role **'course'** have access to the title 
page (_Progress Monitor_) and the section _Courses_. 
In the _Courses_ section, with the role **'course'**, 
it is allowed to create new and edit the content 
of available courses and lessons. Such users can group courses by name and section,
embed lecture videos and add links to additional 
resources that can help to learn more on given topic. It is 
also possible to track student's progress and update it.

_Permissions:_ ["course.get.all", "course.create", "course.update.any", "lesson.create"]

### 7. Flash
Users assigned with the role **'flash'** can access, create and edit _flash cards_, 
but unable to delete them. Such users can not change or see their _profile settings and info_.
They have no access to lectures, courses and any other project sections except 
for _flash cards_ section. 

The role **'flash'** can be only assigned to the user by another user with **'admin'** role, or assigned 
manually by database administrator. 

_Available actions for the users with the role **'flash'**:_
* _Flash:_ 'refresh' 
* _Flash:_ 'create new card' => have two fields 'questions' & 'answers'
* _Flash:_ 'training'

### 8. Admin 
The **'admin'** role has all the permissions available. Administrators manually checks new 
user accounts and decides which roles they should receive. 

_Admin's Permissions breakdown by Application and Activities:_
* _User:_ 'auth', 'get.all', 'delete.any', 'update.any';
* _Course:_ 'get.all', 'create', 'update.any', 'delete,any', 'lesson.create';
* _Group:_ 'get.all', 'get', 'create', 'update.any', 'delete.any';
* _Lecture:_ 'get.all', 'get', 'create', 'update.any', 'delete.any';
* _Homework:_ 'get.all', 'answer', 'create', 'review';
* _Diary:_ 'get.all', 'creat', 'update.any', 'delete.any';
* _Quiz Questions group:_ 'get.all', 'create', 'update.any', 'delete.any';
* _Quiz question:_ 'get.all', 'create', 'update.any', 'delete.any';
* _Quiz Answer Group:_ 'get.all', 'create', 'update.any', 'delete.any';
* _Quiz answer:_ 'get.all', 'create', 'update.any', 'delete.any';
* _Flashcard group:_ 'get.all', 'create', 'update.any', 'delete.any';
* _Flashcard Training:_ 'get.all', 'create', 'update.any', 'delete.any'.

### Roles and permissions matrix

|       **ACTIVITY**        |       |         |         |  **ROLES**  |       |        |       |       |
|-----------------------|-------|---------|---------|---------|-------|--------|-------|-------|
|                       | New   | Learner | Student | Teacher | Quiz  | Course | Flash | Admin |
| **_USER**_                |       |         |         |         |       |        |       |       |
| auth                  | ✅  | ✅    | ✅    | ✅    | ✅  | ❌  | ✅  | ✅  |
| get\.all              | ❌ | ❌   | ✅    | ✅    | ❌ | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| _**COURSE**_              |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ✅    | ✅    | ✅    | ❌ | ✅   | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| lesson\.create        | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ❌ | ✅  |
| **_GROUP_**               |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| get                   | ❌ | ❌   | ✅    | ✅    | ❌ | ❌  | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| **_LECTURE_**             |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ✅    | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| get                   | ❌ | ❌   | ✅    | ✅    | ❌ | ❌  | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| **_HOMEWORK**_            |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ✅    | ✅    | ❌ | ❌  | ❌ | ✅  |
| answer                | ❌ | ❌   | ✅    | ❌   | ❌ | ❌  | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| review                | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| **_DIARY_**               |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ✅    | ✅    | ✅    | ❌ | ❌  | ❌ | ✅  |
| create                | ❌ | ✅    | ✅    | ❌   | ❌ | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| **_QUIZ QUESTION GROUP_** |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ✅    | ✅    | ❌ | ❌  | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ✅    | ❌ | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ❌ | ✅  |
| **_QUIZ QUESTION_**       |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ✅    | ✅    | ✅  | ❌  | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ✅  | ❌  | ❌ | ✅  |
| **_QUIZ ANSWER GROUP_**   |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| create                | ❌ | ✅    | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ✅  | ❌  | ❌ | ✅  |
| **_QUIZ ANSWER**_         |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| create                | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ✅    | ✅  | ❌  | ❌ | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ✅  | ❌  | ❌ | ✅  |
| **_FLASHCARD GROUP_**     |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ✅  | ✅  |
| create                | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ✅  | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ✅  | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ✅  | ✅  |
| **_FLASHCARD TRAINING_**  |       |         |         |         |       |        |       |       |
| get\.all              | ❌ | ✅    | ✅    | ❌   | ❌ | ✅   | ✅  | ✅  |
| create                | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ✅  | ✅  |
| update\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ✅   | ✅  | ✅  |
| delete\.any           | ❌ | ❌   | ❌   | ❌   | ❌ | ❌  | ✅  | ✅  |
