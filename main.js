import 'bootstrap/dist/css/bootstrap.css';
import {eventHandler} from './utils/event';

//https://csc.436.matgargano.com/duck use this for later

document.querySelector('#app').innerHTML = `

<div class="container my-5">
      <div class="mb-3">
            <label for="number-1" class="form-label">First Number</label>
            <input type="number" class="form-control" id="number-1">
      </div>
      <div class="mb-3">
            <label for="number-2" class="form-label">Second Number</label>
            <input type="number" class="form-control" id="number-2">
      </div>

      <button id="add" class="btn btn-primary mb-3">Add</button>
      <button id="mul" class="btn btn-danger mb-3">Multiply</button>
      <div class="mt-5 rounded border p-5 bg-secondary text-white">
            Result: <div id="result">
      </div>
</div>


`; //Find element with ID of app

eventHandler();