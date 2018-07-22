# ko-flatpickr
Flatpickr.js date and time flatpickr instances using Knockout.js bindings.

## Installation
Simply include a reference in your project after flatpickr.js
```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<script src="/path/to/flat-pickr.js"
```

## Usage
Simply add a datepickr or timepickr binding to create a flatpickr instance and pass a observable value you in.
```html
<input data-bind='datepickr: {}, value: valueObservable1' />
<input data-bind='timepickr: {}, value: valueObservable2' />
```