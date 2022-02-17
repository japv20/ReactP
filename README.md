# ReactP

A component is a part of the user interface. An app would normally have 5 components. 1 for the Header, 1 for the NavMenu, 1 for the MainContent, 1 for the Footer and 1 component to contain every other component (the main "root" div).

Component Types:
https://www.youtube.com/watch?v=Y2hgEGPzTZY
    Stateless Functional Component.
        JavaScript functions. 
    Stateful Class Component.
        Class extending component class, they must contain a render method which returns html.
Facebook has over 30,000 components :)

Functional vs Class Components

F - Simple functions, try to use as much as possible, if a component can be created with both methods, always go with the functional one.
Absence of 'this' keyword.
Solution wihout using state.
They are mainly responsible for the UI.
Aka Dumb/Presentational

C - More feature rich.
They can mantain their own private data - State
Complex UI logic
Provide lifecyle hooks
Aka Stateful/Smart/Container Components

JSX - JavaScript XML is an extension to the JS language syntax.
Is an extension to write XML-code for elements and components.
JSX tags have a tag name, attributes, and children.
JSX makes your code simpler and elegant.

In React you have to use 'className' instead of 'class'

Props - Propperties.
    Allows the component to be dynamic.
    In react instead of ${props.name} is just {props.name}