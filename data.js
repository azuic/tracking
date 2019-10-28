const trackingData=
    [ {id:1, data: {napkins: 2, boxes: 0, foodBoxes: 0, papers: 0, plasticBags: 1, cups: 1, paperBags: 4}},
        {id:2, data: {napkins: 9, boxes: 0, foodBoxes: 0, papers: 3, plasticBags: 5, cups: 2, paperBags: 3}},
        {id:3, data: {napkins: 8, boxes: 4, foodBoxes: 1, papers: 1, plasticBags: 2, cups: 2, paperBags: 2}},
        {id:4, data: {napkins: 8, boxes: 2, foodBoxes: 1, papers: 0, plasticBags: 0, cups: 2, paperBags: 2}},
        {id:5, data: {napkins: 4, boxes: 4, foodBoxes: 0, papers: 0, plasticBags: 2, cups: 1, paperBags: 1}},
        {id:6, data: {napkins: 6, boxes: 0, foodBoxes: 0, papers: 0, plasticBags: 1, cups: 2, paperBags: 3}},
        {id:7, data: {napkins: 4, boxes: 3, foodBoxes: 4, papers: 0, plasticBags: 3, cups: 3, paperBags: 2}},
        {id:8, data: {napkins: 5, boxes: 0, foodBoxes: 1, papers: 0, plasticBags: 3, cups: 4, paperBags: 0}},
        {id:9, data: {napkins: 2, boxes: 0, foodBoxes: 0, papers: 0, plasticBags: 3, cups: 2, paperBags: 0}},
        {id:10, data: {napkins: 6, boxes: 0, foodBoxes: 4, papers: 1, plasticBags: 7, cups: 3, paperBags: 0}},
        {id:11, data: {napkins: 5, boxes: 0, foodBoxes: 3, papers: 2, plasticBags: 3, cups: 2, paperBags: 1}},
        {id:12, data: {napkins: 3, boxes: 0, foodBoxes: 1, papers: 0, plasticBags: 1, cups: 2, paperBags: 0}},
        {id:13, data: {napkins: 2, boxes: 0, foodBoxes: 3, papers: 0, plasticBags: 0, cups: 1, paperBags: 0}},
        {id:14, data: {napkins: 2, boxes: 0, foodBoxes: 1, papers: 1, plasticBags: 1, cups: 4, paperBags: 0}},
        {id:15, data: {napkins: 4, boxes: 0, foodBoxes: 2, papers: 0, plasticBags: 4, cups: 1, paperBags: 1}},
        {id:16, data: {napkins: 6, boxes: 0, foodBoxes: 0, papers: 1, plasticBags: 3, cups: 3, paperBags: 5}}];

const sumData = {napkins: 76, boxes: 13, foodBoxes: 22, papers: 10, plasticBags: 39, cups: 35, paperBags: 24};

const median = {napkins: 38, boxes: 6.5, foodBoxes: 11, papers: 5, plasticBags: 19.5, cups: 17.5, paperBags: 12};

const theta = Math.PI*2/7;
const angle = {napkins: theta,
               boxes: theta*2,
               foodBoxes: theta*3,
               papers: theta*4,
               plasticBags: theta*5,
               cups: theta*6,
               paperBags: theta*6};

const cumulativeSum = (sum => value => sum += value)(0);

