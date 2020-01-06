[<<< Back to Table of Contents](index.md)
## PROFILE PAGE

#### 1. Description of Profile page

##### 1.1. Profile page is displayed after User clicks the **Login** button on homepage.
Then User should be redirected to url: https://app.pasv.us/user/.
Profile page is a display or a summary of User's account.

There is a Menu bar with 5 fields (hyperlinks):https://app.pasv.us.
* **Progress Monitor:** after clicking it User goes to the homepage.

* **Courses:** after clicking it User goes to https://app.pasv.us/course.
Here User can find available for them list of courses.

* **Cards:** after clicking it User goes to https://app.pasv.us/flash.
Here User can find list of FlashCards.

* **Groups:** after clicking it User goes to https://app.pasv.us/group.
Here User can find the list of all available lectures divided by topics.

* **Diary:** after clicking it User goes to https://app.pasv.us/diary.
On this page User can create their daily report and
see daily reports of other members of group.

##### 1.2. Profile page also contains a field (hyperlink) with User name.
After clicking it dropdown list pops-up.

There are 3 options:

* **Profile:** this field is active but it does not redirect User anywhere.
So they stay on the same page.

* **Settings:** this field redirects User to https://app.pasv.us/user/edit/
Here they can edit their Profile.

* **Logout:** by clicking it User can log out.

##### 1.3. On Profile page User can also see small icons and labels. 
Icon is available if User indicated link to the website during registration.

* **Google Docs icon:** it redirects User to their Google Document.

* **Facebook icon:** it redirects User to their Facebook account.

* **LinkedIn icon:** it redirects User to their LinkedIn account.

* **GitHub icon:** it redirects User to their GitHub account.

* **Codewars icon:** it redirects User to their Codewars account.

* **Slack icon:** it redirects User to their Slack account.

* The label (for example **QA5**) shows the name of the group in which User is studying.

* This label shows **User role**. It can be new, learner, student, teacher, admin etc.

#### 2. Description of Codewars elements.

Description is made for User in the role of student:

* **Coin:** the numbers to the right of the coin indicate the User's progress.

* **Rank:** shows the level of User's development depending on the tasks (hereinafter, katas) being solved on Codewars.

* **Honor:** shows the number of points assigned to the User depending on the tasks performed on Codewars.

* **Task Completed:** shows the number of tasks performed in Codewars (including repeating decisions).

* The **graph** shows the progress of the User depending on the Honor and the Completed task in time, expressed in days of the month.

#### 3. About
* Field **About** shows information of User’s experience, skills, and hobbies.
Information can appear in the User’s preferred language.
* Text area is required.
* The default state is zero character and the placeholder is "I'm … ".

#### 4. Goals
* User is asked to tell about their goals in programming and career. 
* Text area is required.
* The default state is zero character and the placeholder is "1… 2… 3… ".

#### 5. Completed challenges
##### 5.1. Purpose of the field:
* **Completed Challenges** is a profile page field which main idea is to show a list of User's completed tasks in Codewars.

##### 5.2. Button Update list:
* It refreshes the list of solved katas.

##### 5.3. List of solved katas
* List has to include a table with two columns. Columns have no headers. Each line describes one certain kata:
* First column contains date and time when the kata was solved.
* Second column contains the name of solved kata which has to be a hyperlink leading to this kata at Codewars.
* List has to display all solved katas and has to be sorted by date, when kata was performed.
* The whole list has to be displayed at one web page.
* An example of list:

|     |     |
| --- | --- |
| **12.25.19**  _12:35_ | [String incrementer](https://www.codewars.com/kata//54a91a4883a7de5d7800009c) |
| **12.25.19**  _09:59_ | [Human Readable Time](https://www.codewars.com/kata//52685f7382004e774f0001f7) |
| **12.21.19**  _11:20_ | [Snail](https://www.codewars.com/kata//521c2db8ddc89b9b7a0000c1) |
| **11.11.19**  _21:15_ | [Multiply](https://www.codewars.com/kata//50654ddff44f800200000004) |


#### 6. Daily reports
##### 6.1. Description of Daily reports:

* One of the obligatory parts for Student role is creating **Daily reports**.
* After Daily report was created by User (using **Create day report** button on https://app.pasv.us/user/),
it appears on the list of all User’s Daily reports.
* Label Daily reports is located on the top of Daily reports section.
* To the right from Daily report there is a label icon with quantity of Daily reports current User has created.

##### 6.2. Structure:

* New Daily reports are added to the top of the list of previous reports.
* Each Daily report in the list has a line that shows the date of creation (Month, Day, Year and Time).
* Under the date labels with titles of checkbox fields that User chose while creating Daily report are displayed.
Then actual text of Daily report is shown.
* There is Like icon that shows how many likes this report has (from other Users). User can Like his own report.
* User’s report can be approved by Admin or other person with the same privilege.

[<<< Back to Table of Contents](index.md)