# Expand

## Q1: Why is it important to put thought into your IDs & Classes?
IDs and Classes are shared between HTML, CSS, and JS. If you rename or 
change them in one place, it breaks the others. Consistent, meaningful 
naming makes code easier to maintain and prevents bugs across technologies.

## Q2: What are Data attributes?
Data attributes (e.g. `data-id="123"`) let you store extra information 
directly on HTML elements. They are useful for passing data to JS without 
using hidden fields. Access them via `element.dataset.id` in JS. Overusing 
them can conflict with microdata standards like schema.org.

## Q3: What is a DOM fragment?
A DOM fragment is a lightweight temporary container to hold multiple nodes 
before adding them to the real DOM all at once. For example, if you want 
to add 100 list items, instead of appending them one by one (which triggers 100 re-renders), you add them all to a fragment first, then append the fragment once — triggering only 1 re-render. This makes DOM manipulation much faster.


## Q4: What is the point of a Virtual DOM?
A Virtual DOM is an in-memory copy of the real DOM used by frameworks like 
React. When data changes, the framework updates the Virtual DOM first, 
compares it with the previous version, and only updates the parts of the 
real DOM that actually changed. You gain performance on complex pages since only changed parts are re-rendered. You lose direct control over the DOM and add the overhead of a framework managing it for you.


## Q5: Why is the class attribute className in JS?
Because `class` is a reserved keyword in JavaScript (used for defining 
classes). To avoid conflict, the DOM property is named `className` instead.

## Q6: addEventListener() vs onClick()
`addEventListener()` allows multiple listeners on the same element and 
separates JS from HTML. `onClick()` is simpler but only allows one handler 
and mixes JS with HTML. `addEventListener()` is preferred for cleaner, 
more maintainable code.