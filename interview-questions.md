# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Sounds like it's time for a new migration! Blanking off the pseudo of the top of my head, but you'd do something like [rails generate migration add_foreign_key], and then go into the migration file and put whatever code is necessarry to add your foreign key there. as for the name and where it is, I THINK it should be [student_id], in the cohort model.

Researched answer: commands should be [rails generate migration add_foreign_key_to_students cohort:references] to create the migration file, [def change
  add_foreign_key :students, :cohorts
end
], inside the migration file to do the adding, and then raild db:migrate back in the console to update the database! Oh, and I got the other two questions backwards. it should be [cohort_id], in the student model. ***.tnemom gniniarb sdrawkcab a dah***
**this looks so strange with a code example in it. hard to read when everything is the same color >_<**

2. Which RESTful routes must always be passed params? Why?

Your answer: Delete springs to mind, since you can't really delete nothing unless it can just wipe an entire database. Put 'n Patch also specifically target existing data so would be pretty useless without params methinks.

Researched answer: **researching this one hurts. feels like I could spend days looking into this and still barely understand much more than "technically none of them but also all of 'em depending on the use case".**

3. Name three rails generator commands. What is created by each?

Your answer:Rails g model, resource, and controller are the three that I can recall. as for what they do specifically, model creates the basic layout for entering data into a database, resource does the same thing but also adds HTTP verbage, and controller makes the bones of a controller file.

Researched answer: Can't think of much else to add, sorry.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This route maps to the "index" action of the "StudentsController", which would retrieve and display a list of all students in the system.

action: "POST" location: /students
This route maps to the "create" action of the "StudentsController", which would receive form data from the user and create a new student record in the database.

action: "GET" location: /students/new
This route maps to the "new" action of the "StudentsController", which would display a form for creating a new student record.

action: "GET" location: /students/2
This route maps to the "show" action of the "StudentsController", which would retrieve and display information about the student with ID "2".

action: "GET" location: /students/2/edit
This route maps to the "edit" action of the "StudentsController", which would display a form for editing the information of the student with ID "2".

action: "PATCH" location: /students/2
This route maps to the "update" action of the "StudentsController", which would receive form data from the user and update the information of the student with ID "2".

action: "DELETE" location: /students/2
This route maps to the "destroy" action of the "StudentsController", which would delete the student record with ID "2" from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

   1: As a user, I want to add new tasks to my to-do list so that I can keep track of everything I need to do.

   2: As a user, I want to mark tasks as complete on my to-do list so that I can keep track of what I have accomplished.

   3: As a user, I want to view a list of all tasks on my to-do list so that I can see everything that needs to be done.

   4: As a user, I want to be able to edit the details of a task on my to-do list so that I can make changes if necessary.

   5: As a user, I want to delete tasks from my to-do list so that I can remove tasks that are no longer relevant.

   6: As a user, I want to set due dates for tasks on my to-do list so that I can keep track of deadlines.

   7: As a user, I want to prioritize tasks on my to-do list so that I can focus on the most important tasks first.

   8: As a user, I want to search my to-do list for specific tasks so that I can quickly find what I'm looking for.

   9: As a user, I want to categorize tasks on my to-do list by project or category so that I can keep related tasks together.

   10: As a user, I want to receive reminders or notifications about upcoming tasks on my to-do list so that I don't forget anything important.