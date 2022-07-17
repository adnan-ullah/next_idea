// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {allData} from '../../data/StoreData'
export default function handler(req, res) {
   if(req.method=== 'GET'){
    res.status(200).json(allData)
   }
   if(req.method === 'POST')
   {
    const eachData = req.body.itemData
    
    
    allData.push(eachData)
    res.status(201).json(eachData)
   }
  }
  