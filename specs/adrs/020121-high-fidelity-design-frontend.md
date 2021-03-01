# Feb. 1st 2021, High Fidelity Design for FrontEnd ADR

Resources to get started:

- [Presentation](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/brainstorm/Electric%20Pomato%20UI/UX%20Design%20(Complete)/high_fidelity_interface_design.pdf)
- [Figma](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Brainstormed Ideas](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/brainstorm)
- [Design Team Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/012521-design.md)
- Ask anyone from design team about this.

## Status: accepted

## Deciders: Teresa, Liam, Donald, Andy

## Context and Problem Statement

What are the features and mechanics that we want to subsume into our final design of our application?

## Decision Drivers

- Simplicity and intuitiveness.
- Francesco Chirillo's Pomodoro Technique philosophy.
- Task and time management.

## Options to consider

1. Theme:
    - Use CSS themes, specifically the paper CSS theme.
    - Draw our own designs.
    - Design only using a simplistic layout and a Lillipution amount of art.
2. Features pertaining to Francesco's Pomodoro Technique:
    - 25-30 minute break timer after 4 Pomodoros.
    - To-do today/Task list sheet.
    - Activity Inventory sheet.
    - Unplanned and urgent list.
        - Urgent task slot.
    - Records sheet.
    - Estimated number of Pomodoros.
        - Allow and track multiple estimations for a single task.
        - Evince estimated and real number of Pomodoros below timer.
3. Miscellaneous features:
    - Plots and visuals.
    - Display task remaining and completed count.
    - Documentation on application itself.
        - Landing page.
    - Docmentation on separate wiki page.
5. Funcitonality:
    - Begin button for the timer.
    - Exit application button during the break timer.
    - Hide timer and supplant it with a hoverable "bar."
    - "I finished early!" button.
        - Additional "I need more time!" button.
    - Prompt the user to input more tasks if they completed all their tasks for the day.
6. User information storage:
    - Store user accounts.
    - Only keep track of a single user.
7. Page layout:
    - Single page for timer.
    - Multiple pages for timer.
8. Task list appearance:
    - Pop-up task list.
    - Display task list and timer concomitantly on the same page.

## Decision Outcome (bolded options indicate the features we decided to implement)

1. Theme.
    - Use CSS themes, specifically the paper CSS theme: see the bolded reason below.
    - __Draw our own designs: we were considering CSS themes, especially the paper theme, but Teresa showed us some drawings, which looked better and felicitous for the setting of a Pomodoro Timer.__
    - Design only using a simplistic layout and a Lillipution amount of art: most of the members felt that having a miniscule amount of art was a bit too bland for our application.
2. Features pertaining to Francesco's Pomodoro Technique.
    - __25-30 minute break timer after 4 Pomodoros: this is part of the core functionality of the timer, so we need to include it.__
    - __To-do today/Task list sheet: only having a timer as our project would seem insipid and prosaic. Adding a task list seems reasonable and achievable by the end of the quarter. Furthermore, it will help the user manage their tasks for the day.__
    - Activity Inventory sheet: while this is part of the Pomodoro Technique that Francesco delineated, we felt that this may inundate the development team with too many things to implement. It also adds a layer of complexity that goes against the idea of simplicity and intuitiveness that we want for the user.
    - Unplanned and urgent list: same reason as above, especially because this is one of the most convoluted parts of the Pomodoro Technique.
        - ~~Urgent task slot: IGNORE.~~
    - __Records sheet: our team decided to incorporate this page because it goes along with the task list and would help the user summarize his or her performance; however, we don't want this to be too sophisticated for the sake of giving the developers enough time to work on this project.__
    - __Estimated number of Pomodoros: this is a relatively straightforward thing to implement. It's also a mechanic that Francesco limns in his book.__
        - Allow and track multiple estimations for a single task: this can engender a number of issues for the development team, and it may make parts of the page look cluttered. The biggest issue with this feature is that it aggrandizes the number of variables to keep track of and may drastically alter the way the Records Sheet must be displayed.
        - Evince estimated and real number of Pomodoros below timer: this simply contributes to clutter on the page and isn't necessary to implement.
3. Miscellaneous features.
    - Plots and visuals: this can introduce inexorable impediments because of how much planning may be invovled for implementing these features, so we thought it's best to exlude them from this project.
    - Display task remaining and completed count: Same reason as "evince estimated and real number of Pomodoros below timer."
    - __Documentation on application itself: after a bit of thinking, we feel that our documentation would only take up a modicum of space on a Wiki page, so we advocated for writing documentation on the application itself, specifically on the landing page.__
        - __Landing page: we decided to incorporate a landing page to help introduce the user to the application since the Pomodoro Technique is a rather obscure self-improvement technique.__
    - Docmentation on separate wiki page.

14. Begin button for timer.
    - To clarify, we were debating on whether the timer should start immediately after adding completing the task list at the beginning of the day or prompt the user to start when they're ready. We decided to do the latter. That is, to add a button prompting the user so the application doesn't start untowardly.
16. Landing page.
    - 
20. Only keep track of a single user.
    - This application is most likely going to be used for personal reasons, so we decided to only keep track of a single user's information.
21. Single page for timer.
    - As our project was still in an amorphus state, this is something we needed to ask the developers about since it shapes the code layout of our project. They ultimately decided to go for a single pagea application (timer page only) because it's a lot easier to keep track of things and minimizes the number of times the program must interact with local storage.
23. Pop-up task list.
    - We felt like hiding the task list while the work timer is active might be inconvenient for the user. There was also another option for keeping the task list on the same screen as the timer, but that may obfuscate and add clutter on the screen.
27. ~~I finished early!~~ button.
    - The user needs to be able to indicate if they finish their task early so they don't get stuck on the same task even if they've completed it.
    - UPDATE: “I finished early” may be ambiguous because some people may take that as finish the break early. It will be renamed to “I need another Pomodoro” instead. 

### Rejected

17. Docmentation on separate wiki page.
    - See "documentation on application itself" in the accepted section.
19. Store user accounts.
    - Implementing this would most likely require a server/backend component of this project, which is quite an unconscionable expectation for the developers.
22. Multiple pages for timer.
    - See "single page for timer" in the accepted section.
24. Display task list and timer concomitantly the same page.
    - See "pop-up task list" in the accepted section.
25. Exit application button during the break timer.
    - The user can just close the application any time. Additionally, it just adds more clutter.
26. Hide timer and supplant it with a hoverable "bar."
    - This might make the application a lot less intuitive and understandable for the user.
28. I need more time! button.
    - ~~Our reason for changing the button if the number of actual Pomodoros exceeds that of the user's estimated Pomodoros is because of the following philosophy behind the Pomodoro Technique: you should start getting a feel for how much time each task should take as you employ this technique, which should help you with planning. This small time pressure should help encourage the aforementioned idea.~~
    - ~~UPDATE: the development team thinks this makes the logic a bit convoluted.~~
    - ~~UPDATE: They want to change this button to use the same logic as the “I finished early!” so it doesn’t forcibly kick the user off, which may stress out the user.~~
    - ~~UPDATE: The button is now changed to “I finished!”~~
    - UPDATE: Teresa brought up that both buttons ("I need another Pomodoro" and "I finished") should be implemented; these buttons should have a toggle function that enables the user to swap between these two buttons. Clicking on "I finished!" changes the screen to the "Next Task" screen while clicking on "I need another Pomodoro" should change the screen to the "Current Task:" screen.
29. Prompt the user to input more tasks if they have completed all their tasks.
    - ~~Perhaps the user may want to do more tasks in a single day, and this doesn't add much complexity~~
    - ~~UPDATE: the development team thinks that implementing this is wishful thinking, so we are moving this to rejected.~~
    - UPDATE: we changed our minds again. The application should show the prompt after the user completes the last task. The timer will still count down while the prompt is shown on the screen. however. If the timer fully elapses, then it should automatically take the user to the Records Sheet screen.