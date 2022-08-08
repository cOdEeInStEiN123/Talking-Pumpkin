class Pumpkin{
    constructor(x, y, rad){
        this.x=x; 
        this.y=y;
        this.rad=rad;
    }
    draw(ctx, openness){
        ctx.save();
        ctx.translate(this.x, this.y); 
        ctx.scale(this.rad, this.rad); 

        // ctx.fillStyle="lightgrey";
        // ctx.beginPath(); 
        // ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2);
        // ctx.rect(this.x-this.rad, this.y-this.rad, this.rad*2, this.rad*2)
        // ctx.rect(-1, -1, 2, 2);
        // ctx.fill(); 

        this.#drawHead(ctx, openness);
        this.#drawEyes(ctx, openness);
        this.#drawNose(ctx, openness); 
        this.#drawMouth(ctx, openness); 

        ctx.restore();
    }
    
    #drawMouth(ctx, openness){
        ctx.save();
        ctx.translate(0, 0.4); 
        ctx.scale(1-openness*0.2, 0.2+openness); 

        ctx.fillStyle="black"; 
        // ctx.beginPath(); 
        ctx.moveTo(-0.6, 0); 
        ctx.lineTo(-0.4, -0.17);
        ctx.lineTo(-0.2, -0.08);
        ctx.lineTo(0, -0.2); 
        ctx.lineTo(0.2, -0.08);
        ctx.lineTo(0.4, -0.17);
        ctx.lineTo(0.6, 0); 
        ctx.lineTo(0.4, 0.17);
        ctx.lineTo(0.2, 0.08);
        ctx.lineTo(0, 0.2); 
        ctx.lineTo(-0.2, 0.08);
        ctx.lineTo(-0.4, 0.17);
        ctx.closePath();
        ctx.fill(); 

        ctx.restore();

    }

    #drawNose(ctx, openness){
        ctx.save();
        ctx.translate(-0.08, -openness*0.05); 

        ctx.fillStyle="black"; 
        ctx.beginPath(); 
        ctx.moveTo(-0.05, 0); 
        ctx.lineTo(0.05, -0.05); 
        ctx.lineTo(0.05, 0.05); 
        ctx.closePath();
        ctx.fill(); 

        ctx.restore();

        ctx.save();
        ctx.translate(0.08,  -openness*0.05); 

        ctx.fillStyle="black"; 
        ctx.beginPath(); 
        ctx.moveTo(0.05, 0); 
        ctx.lineTo(-0.05, -0.05); 
        ctx.lineTo(-0.05, 0.05); 
        ctx.closePath();
        ctx.fill(); 

        ctx.restore();
    }

    #drawEyes(ctx, openness){
        ctx.save();
        ctx.translate(-0.4, -0.4); 
        ctx.scale(1+openness*0.3,1.2-openness)

        ctx.fillStyle="black"; 
        ctx.beginPath(); 
        ctx.moveTo(-0.15, 0); 
        ctx.lineTo(0.15, -0.15); 
        ctx.lineTo(0.15, 0.15); 
        ctx.closePath();
        ctx.fill(); 

        ctx.restore();

        ctx.save();
        ctx.translate(0.4, -0.4); 
        ctx.scale(1+openness*0.3,1.2-openness)

        ctx.fillStyle="black"; 
        ctx.beginPath(); 
        ctx.moveTo(0.15, 0); 
        ctx.lineTo(-0.15, -0.15); 
        ctx.lineTo(-0.15, 0.15); 
        ctx.closePath();
        ctx.fill(); 

        ctx.restore();
    }

    #drawHead(ctx, openness){
        ctx.fillStyle="green"; 
        ctx.beginPath(); 
        ctx.rect(-0.05, -1, 0.1, 0.1);
        ctx.fill();

        ctx.fillStyle="rgb(255, 150, 0)"; 
        ctx.beginPath(); 
        ctx.ellipse(0.6, 0, 0.3, 0.97, openness*0.05, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle="rgb(255, 150, 0)"; 
        ctx.beginPath(); 
        ctx.ellipse(-0.6, 0, 0.3, 0.97, -openness*0.05, 0, Math.PI*2);
        ctx.fill();

        ctx.fillStyle="rgb(255, 170, 0)"; 
        ctx.beginPath(); 
        ctx.ellipse(0.3, 0, 0.3, 0.95, openness*0.02, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle="rgb(255, 170, 0)"; 
        ctx.beginPath(); 
        ctx.ellipse(-0.3, 0, 0.3, 0.95, -openness*0.02, 0, Math.PI*2);
        ctx.fill();

        ctx.fillStyle="rgb(255, 190, 0)"; 
        ctx.beginPath(); 
        ctx.ellipse(0, 0, 0.3, 0.9, 0, 0, Math.PI*2);
        ctx.fill();
    }
}