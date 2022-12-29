# Custom components documentation with Storybook documentation

Every web app has some degree of commonality as far as the UI components it uses are concerned. 
(input fields, select components, etc...).
Thus, we've taken the initiative to integrate generic components a front end project requires,
along with some custom ones that we'd consider helpful, within Start UI's Storybook.
Each following section has its counterpart within the Storybook and will detail the different components it consists of.

## Components

- [ActionsButton](https://demo.start-ui.com/storybook/index.html?path=/story/components-actionsbutton--default) : displays an action button (i.e. tagged with the "actions" icon) used to trigger 
a list of options to select from.
- [ConfirmMenuItem](https://demo.start-ui.com/storybook/index.html?path=/story/components-confirmmenuitem--default) : represents a Menu tag option that requires confirmation to apply.
- [ConfirmModal](https://demo.start-ui.com/storybook/index.html?path=/story/components-confirmmodal--default) : represents a basic modal that triggers an alert prompt on confirmation button click.
- [ConfirmPopover](https://demo.start-ui.com/storybook/index.html?path=/story/components-confirmpopover--default) : represents a basic popover that triggers an alert prompt on confirmation button click.
- [DataList](https://demo.start-ui.com/storybook/index.html?path=/story/components-datalist--default) : represents a frame consisting of a header, rows and cells, used to list out elements of data set.
- [DateAgo](https://demo.start-ui.com/storybook/index.html?path=/story/components-dateago--default) : displays a sentence which, when hovered on, will show some inputted date's value on top of it.
- [DateSelector](https://demo.start-ui.com/storybook/index.html?path=/story/components-dateselector--default) : displays a selected date. The different values can be selected through back and forward arrows. 
- [DayPicker](https://demo.start-ui.com/storybook/index.html?path=/story/components-daypicker--default) : displays a selected date. The different values can be selected through a calendar frame. 
- [FormGroup](https://demo.start-ui.com/storybook/index.html?path=/story/components-formgroup--default) : displays a form and its content, along with its label on top, helper message on the bottom and error 
message (if constrained to validation).
- [Icons](https://demo.start-ui.com/storybook/index.html?path=/story/components-icons--react-icons) : displays a generic or custom icon (i.e. fetched from an SVG file).
- [InputCurrency](https://demo.start-ui.com/storybook/index.html?path=/story/components-inputcurrency--default) : displays an editable amount of money along with some currency's symbol. Its value can be bound 
to a state object.
- [Logo](https://demo.start-ui.com/storybook/index.html?path=/story/components-logo--default) : displays Start UI's logo.
- [Nav](https://demo.start-ui.com/storybook/index.html?path=/story/components-nav--default) : structures a navigation menu.
- [SearchInput](https://demo.start-ui.com/storybook/index.html?path=/story/components-searchinput--uncontrolled) : corresponds to an input field with search feature.
- [TextCurrency](https://demo.start-ui.com/storybook/index.html?path=/story/components-textcurrency--default) : displays a non-editable amount of money along with some currency's symbol. 
Its value can be bound to a state object.
- [ResponsiveIconButton](https://demo.start-ui.com/storybook/index.html?path=/story/components-responsiveiconbutton--default) : displays a responsive button, tagged with an icon
- [Select](https://demo.start-ui.com/storybook/index.html?path=/story/components-select--default) : represents a select input and its many variations (ex : asynchronous select, nested in popover, 
nested in modal, etc...)
- [Sort](https://demo.start-ui.com/storybook/index.html?path=/story/components-sort--default) : sorting component. Its value must be bound to a state object of type `SortValue`.

## Fields components for Formiz

Since we choose Formiz as our preferred library for handling forms, we've implemented the types of fields that 
generally appear in forms, ready to be used with Formiz, out of the box. 

These include :

- [FieldBooleanCheckbox](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldbooleancheckbox--default) : corresponds to a boolean valued checkbox, displayed with its label and optional helper message.
- [FieldCheckboxes](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldcheckboxes--default) : represents a set of checkboxes whose possible values are fetched from an array of objects
  passed to the `options` props.
- [FieldCurrency](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldcurrency--default) : corresponds to a numeric input, along with a currency symbol.
- [FieldDayPicker](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fielddaypicker--default) : same as a `DayPicker`.
- [FieldHidden](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldhidden--default) : corresponds to a hidden field.
- [FieldInput](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldinput--default) : corresponds to an input field.
- [FieldMultiSelect](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldmultiselect--default) : corresponds to a select field which can have multiple values at one time.
- [FieldRadios](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldradios--default) : represents a set of radio buttons whose possible values are fetched from an array of objects
  passed to the `options` props.
- [FieldSelect](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldselect--default) : corresponds to a single value select field
- [FieldTextarea](https://demo.start-ui.com/storybook/index.html?path=/story/fields-fieldtextarea--default) : corresponds to a text area, displayed with its label and optional helper message.

## Errors

- [ErrorBoundary](https://demo.start-ui.com/storybook/index.html?path=/story/errors-errorboundary--default) : similar to React's ErrorBoundary, which is a component that captures JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed. In Start UI, the fallback has been customed.
- [ErrorPage](https://demo.start-ui.com/storybook/index.html?path=/story/errors-errorpage--default) : corresponds to a visual rendering of common error pages (404, 403...) , customised with Start UI's designs.