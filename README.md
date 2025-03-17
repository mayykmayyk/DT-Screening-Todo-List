# DT-Screening-Todo-List

# Explanation
For this exercise, I tried to meet all the required features within the 2 hour limit.
First of all, I coded the basic HTML structure. I used a simple and straigt forward layout where the user can easily see the input form. Importing the Poppins fonts from google, using a nordic color palette (https://www.nordtheme.com/docs/colors-and-palettes) makes the app a little less bland.

Using a form tag also makes the exercise simpler, since this tag allows the user to submit tasks by either clicking
the "add" button, or by pressing "enter" on the keyboard. I also thought that there may be users who will be submitting the form with no content, and to prevent this, I added the "required" attribute to the input field.

The "task-list" div serves as the target wrapper where appending the tasks would happen. Initially, I have created a static version of the app, where the task-list div would contain placeholder task items. This would make it easier to set up the layout, style, and set the other interactive features (deleting, setting the task to complete).

Once the HTML and styling is finished, I proceeded to add javascript to the mix. The createItem function is basically where everything happens. I converted the staticly coded "task-item" into javascript, by creating the elements that make up this component. Once they are created, and their classes set, I added the scripts for setting the task to complete, and removing each task.