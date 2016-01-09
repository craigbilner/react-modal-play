# react modal play

Issues relating to [react refs](https://facebook.github.io/react/docs/more-about-refs.html)

## unmount issue

Reproduction:

* click show modal
* click close child modal

Result:

```
Uncaught TypeError: node.removeAttribute is not a function
```

Problem:

```
var setMountNode = function setMountNode(ref) {
    return _this.mountNode = !ref || ref.getMountNode();
};
```

setMountNode is called with null and returns a boolean which doesn't work so well with ```node.removeAttribute('aria-hidden');```

Potential Fix:

```
var setMountNode = function setMountNode(ref) {
    if(ref && ref.getMountNode) {
        _this.mountNode = ref.getMountNode();
    }
};
```

## ref issue

Reproduction:

* click show modal
* click show grand child

Result:

```
ReactRef.detachRefs(internalInstance, prevElement);
```

this code is unnecessarily run

Potential Fix:

move setMountNode to the class instance so the refs are the same