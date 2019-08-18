# This is a mini library for creating spectacular html modals.

steps for creating a modal

1. link up the css file with your project
```
<link rel="stylesheet" href="main.css"> 
```
2. add javascript source to your project
```
<script src="./Modal.js"></script>
```
3. create a division with modal trigger and modal body

```html
trigger:
<button class="modal-trigger" data-target="modal1">Open Modal1</button>

modal body:
<div class="modal" id="modal1">
        <div class="mbody">
            <p class="title">Hello1</p>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, voluptatem dicta minima reiciendis quaerat laudantium distinctio mollitia atque amet velit laborum repudiandae deleniti consequuntur beatae obcaecati, ipsum tempora rerum ratione!
            </p>
        </div>
    </div>
```

4. initialise the modal classes
```javaScript
    var modal = new Modal();
```
## you're all done!!

you also can modify the content and specs of the modal runtime

```javascript
var options = {
        title:"New Title",
        html:`<h2>This is the Updated Content</h2><br>${l}`,
        size:{
            x:1000,
            y:300
        },
        bgcolor:"rgb(255,255,0)"
    }
// modal.content([number of instance],[options])
 modal.content(1,options);

```