class Ray {

    origin = createVector();
    heading = 0;

    constructor(v, angle) {
        this.origin = v;
        this.heading = angle;
    }

    draw = function () {

        let x1 = this.origin.x;
        let y1 = this.origin.y;

        let x2;
        let y2;
        let pts = [];
        let closest = Infinity;
        let winner = 0;
        for (let i = 0; i < boundaries.length; i++) {
            let b = boundaries[i];
            let pt = this.intersects(b);
            if (pt) {
                pts.push(pt);
            }
        }

        if (pts.length > 0) {

            for (let i = 0; i < pts.length; i++) {
                let distance = dist(pts[i].x, pts[i].y, this.origin.x, this.origin.y);
                if (distance < closest) {
                    winner = i;
                    closest = distance;
                }
            }

            let pt = pts[winner];
            x2 = pt.x;
            y2 = pt.y;

        } else {
            x2 = x1 + 900 * Math.cos(this.heading);
            y2 = y1 + 900 * Math.sin(this.heading);
        }

        line(x1, y1, x2, y2);

    }

    intersects = function (b) {
        const x1 = b.p1.x;
        const y1 = b.p1.y;
        const x2 = b.p2.x;
        const y2 = b.p2.y;

        const x3 = this.origin.x;
        const y3 = this.origin.y;
        const x4 = x3 + 900 * Math.cos(this.heading);
        const y4 = y3 + 900 * Math.sin(this.heading);

        const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (denom == 0)
            return;

        let t = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);
        let u = (x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3);
        t /= denom;
        u /= -denom;

        if (t > 0 && t < 1 && u > 0) {

            let x = x1 + t * (x2 - x1);
            let y = y1 + t * (y2 - y1);
            return createVector(x, y);

        } else {
            return;
        }

    }

}