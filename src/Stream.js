function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }


export async function streamService (callBackFunc) {
  
   while(true) {
    let delayres = await delay(2000);
    let orderBook = {
        Buy: [
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },

            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },

            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            }
          
        ],
        Sell: [
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },

            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },
            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            },

            {
                Price : Math.random(),
                Amount : Math.random(),
                Total : Math.random()
            }
          
        ],
    }
    // console.log(orderBook);
    if(callBackFunc) {
        callBackFunc(orderBook);
    }
   }
                
   
}

// function returnOrderBook (orderBook) {
//     return orderBook
// }

// streamService();