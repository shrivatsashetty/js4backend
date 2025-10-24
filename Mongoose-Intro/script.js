import mongoose from "mongoose";


const kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
});

kittySchema.methods.speak = function () {
    const greeting = this.name ? `Meow... my name is ${this.name}` : 'Meow... I don\'t have a name';
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const snowBell = new Kitten(
    {
        name: 'Snowbell',
        age: 3,
        color: 'White'
    }
);

const fluffy = new Kitten(
    {
        name: 'Fluffy',
        age: 5,
        color: 'Cream'
    }
);

snowBell.speak();
fluffy.speak();


async function main() {
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/kittenDB');
        await snowBell.save();
        await fluffy.save();

        const kittens = await Kitten.find();
        console.log(kittens);

        const fluffies = await Kitten.find({ name: 'Fluffy' });
        
        console.log(fluffies);
        
    } 
    catch (err) {
        console.error(err);
    }

}

main();