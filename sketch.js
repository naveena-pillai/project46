//variables for backgrounds
var artClassImg, classroomImg, gymImage, hallwayImg, lunchroomImg;
//variables for sprites
var boyStudentImg, girlStudentImg, meanTeacherImg, teacherImg, tomWalkAnimation, tomStandingImg, basketballImg;
//variables for objects
var classroom, artClassroom, gym;
//variables for normal class
var tom, teacher;
//variables for art class
var girlStudent, artTeacher;
//variables for gym class
var boyStudent, gymTeacher, basketball;
var gameState;


function preload(){
    artClassImg = loadImage("backgrounds/artClassroom.png");
    classroomImg = loadImage("backgrounds/classroom1.jpg");
    gymImage = loadImage("backgrounds/gym.jpg");
    hallwayImg = loadImage("backgrounds/hallway.png");
    lunchroomImg = loadImage("backgrounds/lunchroom.jpg");

    boyStudentImg = loadImage("sprites/boyStudent.png");
    girlStudentImg = loadImage("sprites/girlStudent.png");
    meanTeacherImg = loadImage("sprites/meanTeacher.png");
    teacherImg = loadImage("sprites/teacher1.png");
    basketballImg = loadImage("sprites/basketball.png");

    tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" )
    tomStandingImg = loadAnimation("tom/boy3.png");
}

function setup(){
    createCanvas(1000,800);
    gameState = "classroom";

    canvas = createSprite(500,400,1000,800);
    canvas.addImage(classroomImg);

    classroom = new Classroom();

    artClassroom = new ArtClassroom();

    gym = new Gym();
}

function draw(){
    background(0);

    if(gameState==="classroom"){
        canvas.addImage(classroomImg);
        canvas.scale = 1.7;
        console.log(gameState);
        classroom.display();;
    }

    if(gameState==="artClass"){
        canvas.addImage(artClassImg);
        artClassroom.display();
        artClassroom.walkAway();
    }
    if(gameState==="gymClass"){
        canvas.addImage(gymImage);
        gym.display();
        gym.walkAway();
    }
    
    drawSprites();
}