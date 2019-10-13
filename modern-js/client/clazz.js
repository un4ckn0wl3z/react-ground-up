class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get color() {
        return this._color;
    }

    set color(c) {
        this._color = c;
    }

    get area() {
        return this.height * this.width;
    }

    static areas(obj) {
        return obj;
    }
}

const r = new Rectangle(100, 200);
console.log(r.height, r.width);
r.color = 'RED';
console.log(r.color);
console.log(r.area);
