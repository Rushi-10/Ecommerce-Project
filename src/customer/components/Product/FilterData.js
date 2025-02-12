export const color=[
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "pink",
    "Green",
    "Yellow",
];

export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:"White"},
            {value:"beige",label:"Beige"},
            {value:"blue",label:"Blue"},
            {value:"brown",label:"Brown"},
            {value:"green",label:"Green"},
            {value:"purple",label:"Purple"},
            {value:"yellow",label:"Yellow"},
            
        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
          
        ],
    },
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399",label:"$159 to $399"},
            {value:"399-999",label:"$399 to $999"},
            {value:"999-1999",label:"$999 to $1999"},
            {value:"1999-2999",label:"$1999 to $2999"},
            {value:"2999-3999",label:"$2999 to $3999"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% to 20%"},
            {value:"20",label:"20% to 30%"},
            {value:"30",label:"30% to 40%"},
            {value:"40",label:"40% to 50%"},
            {value:"50",label:"50% to 60%"},
            {value:"60",label:"60% to 70%"},
            {value:"70",label:"70% to 80%"},
            {value:"80",label:"80% to 90%"},
        ]
    },
    {
        id:"stock",
        name:"Avalability",
        options:[
            {value:"in_stock",label:"In Stock"},
            {value:"out_of_stock",label:"Out of Stock"},
        ],
    },
]