let w = window.innerWidth;
let h = window.innerHeight;

const cumSumData=[];
for (let i=0;i++;i<trackingData.length){
    cumSumData.push(Object.values(trackingData[i].data).map(cumulativeSum));
};

const types=Object.keys(sumData);
console.log(types);

const app = new PIXI.Application({ transparent: true, width: w, height: h });
document.body.appendChild(app.view);

// PIXI.Graphics.prototype.drawDashLine = function(toX, toY, dash = 4, gap = 3) {
//     const lastPosition = this.currentPath.shape.points;
//
//     const currentPosition = {
//         x: lastPosition[lastPosition.length - 2] || 0,
//         y: lastPosition[lastPosition.length - 1] || 0
//     };
//
//     const absValues = {
//         toX: Math.abs(toX),
//         toY: Math.abs(toY)
//     };
//
//     const angle = Math.atan((currentPosition.y-absValues.toY)/(currentPosition.x-absValues.toX));
//
//     for (
//         ;
//         Math.abs(currentPosition.x) < absValues.toX ||
//         Math.abs(currentPosition.y) < absValues.toY;
//     ) {
//         currentPosition.x =
//             Math.abs(currentPosition.x + dash) < absValues.toX
//                 ? currentPosition.x + dash*Math.cos(angle)
//                 : toX;
//         currentPosition.y =
//             Math.abs(currentPosition.y + dash) < absValues.toY
//                 ? currentPosition.y + dash*Math.sin(angle)
//                 : toY;
//
//         this.lineTo(currentPosition.x, currentPosition.y);
//
//     }
// };

PIXI.Graphics.prototype.drawDashedPolygon = function(polygons, x, y, rotation, dash, gap, offsetPercentage){
    // var i;
    let p1;
    let p2;
    let dashLeft = 0;
    let gapLeft = 0;
    if(offsetPercentage>0){
        let progressOffset = (dash+gap)*offsetPercentage;
        if(progressOffset < dash) dashLeft = dash-progressOffset;
        else gapLeft = gap-(progressOffset-dash);
    }
    let rotatedPolygons = [];
    for(let i = 0; i<polygons.length; i++){
        let p = {x:polygons[i].x, y:polygons[i].y};
        let cosAngle = Math.cos(rotation);
        let sinAngle = Math.sin(rotation);
        let dx = p.x;
        let dy = p.y;
        p.x = (dx*cosAngle-dy*sinAngle);
        p.y = (dx*sinAngle+dy*cosAngle);
        rotatedPolygons.push(p);
    }
    for(let i = 0; i<rotatedPolygons.length; i++){
        p1 = rotatedPolygons[i];
        if(i === rotatedPolygons.length-1) p2 = rotatedPolygons[0];
        else p2 = rotatedPolygons[i+1];
        let dx = p2.x-p1.x;
        let dy = p2.y-p1.y;
        let len = Math.sqrt(dx*dx+dy*dy);
        let normal = {x:dx/len, y:dy/len};
        let progressOnLine = 0;
        this.moveTo(x+p1.x+gapLeft*normal.x, y+p1.y+gapLeft*normal.y);
        while(progressOnLine<=len){
            progressOnLine+=gapLeft;
            if(dashLeft > 0) progressOnLine += dashLeft;
            else progressOnLine+= dash;
            if(progressOnLine>len){
                dashLeft = progressOnLine-len;
                progressOnLine = len;
            }else{
                dashLeft = 0;
            }
            this.lineTo(x+p1.x+progressOnLine*normal.x, y+p1.y+progressOnLine*normal.y);
            progressOnLine+= gap;
            if(progressOnLine>len && dashLeft === 0){
                gapLeft = progressOnLine-len;
                console.log(progressOnLine, len, gap);
            }else{
                gapLeft = 0;
                this.moveTo(x+p1.x+progressOnLine*normal.x, y+p1.y+progressOnLine*normal.y);
            }
        }
    }
}


const fly = PIXI.Texture.from('fly.png');

const allDays=[];
const radius=80;
for (let i=0; i<trackingData.length; i++){
    const maxType=_.max(_.keys(trackingData[i].data), function (o) {
        return trackingData[i].data[o];
    });

    // const eachDay = PIXI.Graphics();
    // eachDay.name = trackingData[i].id;
    let eachPoly=[];
    for (let i=0; i++; i<types.length){
        eachPoly.push({x: radius-median[types[i]]+sumData[i],y:})
    }
    eachDay.moveTo()
}