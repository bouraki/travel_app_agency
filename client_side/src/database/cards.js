import { images } from "../constant"

export const cards_data = [
    {
        image:images.italy_place,
        location:'Roma',
        price:320,
        flag:images.italy,
        country: 'Italy',
        adults:2,
        date:'Sep 18 - 25',
        nights:3,
        plane:true,
        car:false
    },
    {
        image:images.canada_place,
        location:'Toronto',
        price:520,
        flag:images.canada,
        country: 'Canada',
        adults:4,
        date:'Sep 08 - 25',
        nights:6,
        plane:true,
        car:true
    },
    {
        image:images.france_place,
        location:'Paris',
        price:820,
        flag:images.france,
        country: 'France',
        adults:1,
        date:'May 10 - 18',
        nights:2,
        plane:false,
        car:true
    },
    {
        image:images.germany_place,
        location:'Munich',
        price:1200,
        flag:images.germany,
        country: 'Germany',
        adults:4,
        date:'Oct 28 - 31',
        nights:6,
        plane:true,
        car:false
    },
]

export default{
    cards_data
}