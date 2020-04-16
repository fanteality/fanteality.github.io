export default class Gl {
    protected c: CanvasRenderingContext2D;
    protected x: number;
    protected y: number;
    protected centerX: number;
    protected centerY: number;
    protected lineWidth: number;
    protected speed: number;
    protected theta: number;
    protected t: number;
    public draw: any;
    protected color: string;
    constructor(c: CanvasRenderingContext2D, x: number, y: number, lineWidth: number, color: string, speed: number) {
        this.c = c;
        this.x = x;
        this.y = y;
        this.centerX = x;
        this.centerY = y;
        this.color = color;
        this.lineWidth = lineWidth;
        this.speed = speed;
        this.theta = Math.random() * Math.PI * 2;
        this.t = Math.random() * 1000;
        this.draw = function () {
            const ls = {
                x: this.x,
                y: this.y,
            };
            let c = this.c;
            this.theta += this.speed;
            this.x = this.centerX + Math.cos(this.theta) * this.t;
            this.y = this.centerY + Math.sin(this.theta) * this.t;
            c.beginPath();
            c.lineWidth = this.lineWidth;
            c.strokeStyle = this.color;
            c.moveTo(ls.x, ls.y);
            c.lineTo(this.x, this.y);
            c.stroke();
            c.closePath();
        };
    }
}
