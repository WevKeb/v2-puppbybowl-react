import React from "react";
import Allpuppies from "./Allpuppies";

const puppies = [
    {
        "id": 26484,
        "name": "Anise",
        "breed": "Australian Cattle Dog / Labrador Retriever",
        "status": "field",
        "imageUrl": "http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg",
        "createdAt": "2025-02-14T00:24:10.402Z",
        "updatedAt": "2025-02-14T00:24:10.402Z",
        "teamId": 3950,
        "cohortId": 3477
      },
      {
        "id": 26485,
        "name": "Bert",
        "breed": "Great Pyrenees / Weimaraner",
        "status": "field",
        "imageUrl": "http://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg",
        "createdAt": "2025-02-14T00:24:10.402Z",
        "updatedAt": "2025-02-14T00:24:10.402Z",
        "teamId": 3950,
        "cohortId": 3477
      },
      {
        "id": 26486,
        "name": "Crumpet",
        "breed": "American Staffordshire Terrier",
        "status": "field",
        "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg",
        "createdAt": "2025-02-14T00:24:10.402Z",
        "updatedAt": "2025-02-14T00:24:10.402Z",
        "teamId": 3950,
        "cohortId": 3477
      }
]

const Main = () => {
    
    return (
        <div>
            <h1>
                Hellow World!
            </h1>
            <Allpuppies puppy={puppies[0]}/>
            <Allpuppies puppy={puppies[1]}/>
            <Allpuppies puppy={puppies[2]}/>
        </div>
    )
} 

export default Main;