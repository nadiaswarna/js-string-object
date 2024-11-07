const college={
    name: 'vnc',
    class:['11','12'],
    events:['science fair','21 feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}
// console.log(college.class)
// console.log(college.unique.color)
// console.log(college.unique)
college.unique.result.gpa='top top top most'
console.log(college.unique.result.gpa)
college.events[1]="huh"
console.log(college.events[1])
delete college.class;
console.log(college)
