import { View , Text , StyleSheet } from "react-native";


export default function App (){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Hey there

      </Text>


      <View style= {styles.darkmode}>
          <Text style={styles.darkText}> Inheritance <Text style= {styles.boldText}>in Bold</Text></Text>
      
      </View>


    <View  >
      <View  style = {[styles.box , styles.lightbluebg, styles.boxShadow , styles.androidShadow]}>
      <Text>LightBlue Box </Text>
      
      </View>
      <View style = {[styles.box , styles.lightgreenbg,styles.androidShadow]}>
      <Text> LightGreen Box</Text>
      
      </View>

    </View>






    
    
    </View>
  )
}





export const styles = StyleSheet.create({
  container : {flex:1 , backgroundColor: 'white' , padding: 60 },
  title: {color:'white', marginTop: 100, backgroundColor: 'black' , textAlign:"center" , borderRadius: 50},
 
  box : {
    height: 150,
    width: 150,
    marginVertical: 10 ,
    marginHorizontal: 10 ,
    paddingHorizontal: 10 ,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: " purple" ,
    borderStyle: "solid"

  },

  darkmode:{
    backgroundColor: "black" ,

  },
  darkText :{
    color: "#fff" ,
  },


  boldText:{
    fontWeight:'bold'
  },







  lightbluebg:{
    backgroundColor : "lightblue"
  },

  lightgreenbg:{
    backgroundColor : "lightgreen"
  },

  boxShadow:{
    shadowColor: "blue",
    shadowOffset:{
      width: 6 ,
      height: 6 ,

    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

  },
    androidShadow:{
      elevation: 20  ,
    }




})













// // import { useState } from "react";
// import { View ,Text , Image,ImageBackground ,ScrollView , Button , Pressable ,Modal , StatusBar , ActivityIndicator , Alert} from "react-native";
// import Greet from "./components/Greet";
// // const logo = require('./assets/adaptive-icon.png')


// export default function App(){

//   // const [isvisible, setIsVisible] = useState(false)

//   // const toggleBar =()=>{
//   //   setIsVisible(!isvisible)
//   // }


//   // const toggleActivity= ()=>{
//   //   setIsVisible(!isvisible)
//   // }
  
 
//   return(
    
    
    
    
//     <View style={{backgroundColor:"plum", flex:1 , padding:60  }}>
//     <Greet  name='Bruce wayne' />
//     </View>
    
    
    


      
      
      
      
      
      
      
//   )
// }




      // <Image 
      // source={{uri:"https://picsum.photos/300"}}
      // style={{width:300, height:300}}
      // />
      
         //   <Image source={logo} style={{width:300, height:300}}>
      // </Image>
      
      
      // <ImageBackground source={logo} style={{flex:1}}  >
      // <Text>Image Test</Text>
      // </ImageBackground>

      

    // <Text  style={{color:"white"}}>
    // Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus at aliquid aspernatur nisi asperiores accusantium excepturi temporibus aliquam, tenetur, qui ducimus! Eius molestias fuga quod maiores. Similique qui molestias, repellat libero ea modi soluta dolores fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis omnis, quibusdam deleniti nihil eveniet quasi laboriosam saepe molestiae totam similique, cum et? Cupiditate totam atque, provident rerum doloremque voluptatibus voluptate modi veritatis tempore magni quisquam aspernatur exercitationem accusamus alias architecto facere sit minima pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint eveniet pariatur sapiente praesentium animi! Omnis cumque reprehenderit odio itaque, voluptates dolorem officia. Mollitia repellat laboriosam veniam? Minima aliquam, voluptatum accusamus, obcaecati debitis illum at non id ab cupiditate repellat eos unde amet, impedit placeat tempore ut dignissimos. Cupiditate numquam explicabo omnis id. Excepturi, dicta rem?
    // </Text>
    
  //   <Pressable  onPress={()=> console.log("Text pressed")}>
  //   <Text style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid totam cum odit deleniti animi incidunt rem architecto reprehenderit possimus est sint ea autem tempora voluptas, numquam eius tenetur asperiores quisquam. Dolorem quae illo eaque et, vitae quibusdam eos, amet similique fugiat consectetur doloremque harum consequuntur ducimus dolorum hic tenetur nostrum impedit accusantium fuga laudantium explicabo nisi? Repellat explicabo accusantium quisquam libero adipisci quia dolorem iste accusamus error! Delectus, nemo quaerat corrupti quia, dolorem eum suscipit similique voluptatum consequatur fuga et esse neque, porro quas! Iste, necessitatibus sequi et modi natus tempore minima velit vero laboriosam architecto. Fuga magnam pariatur sint illo, corporis hic fugiat, fugit repudiandae aut doloremque nisi explicabo est distinctio iusto nostrum quasi ad, excepturi a nobis optio accusantium provident dolorum.</Text>
    
  // </Pressable>
  
  // <Image source={logo} style={{width:200, height:300}}></Image>
    
  // <Text style={{color: "black" }}>
  // Hello
  // World
  // </Text>
  
  
  
  // <Button 
  // title="press me"
  // color='green'
  // // disabled={state}
  // onPress={()=> setIsVisible(true)}>
  
  
  
  
  // </Button>
  
  
  // <Pressable  onPress={()=> console.log("Image pressed")}>
  //   <Image source={logo} style={{width:200, height:300}}></Image>
  // </Pressable>

  
  // <Modal visible={isvisible} onRequestClose={()=>setIsVisible(false)} animationType="fade" presentationStyle="pagesheet">
  // <View style={{ flex:1,backgroundColor: "lightgreen", padding: 60}}>
  // <Text > Modal Hai</Text>
  // <Button title="Band Kar" color='red' onPress={()=> setIsVisible(false)}
  // />
  // </View>
  
  
  
  // </Modal>

  // <StatusBar  hidden={isvisible}  backgroundColor='white' barStyle='dark-content'  />
    
  // <Button title={isvisible ? "unhide" : "hide"} onPress={toggleBar}  ></Button>
  
  // <View style={{ flex:1,backgroundColor: "plum", padding:60 }}>

  //   <ScrollView>
   
    
  //     <ActivityIndicator size='large' color='black' animating = {isvisible} />

  //     <Button title="loading" onPress={toggleActivity}></Button>


   
  //     <View style={{paddingTop:300}}>
  //     <Button  title="Alert" onPress={()=>Alert.alert('Omg') }></Button>
  //     <Button  title="Alert2" onPress={()=>Alert.alert('Omg', "incorrect name") }></Button>
  //     <Button  title="Alert2" onPress={()=>Alert.alert('Omg', "incorrect name",[
  //       {
  //         text:"Cancel",
  //         onPress: ()=> console.log('Cancelled ')
  //       },
  //       {
  //         text:"Ok",
  //         onPress: ()=> console.log('Done ')
  //       }
  //     ]) }></Button>
      
      
  //     </View>
    
    
    
    
    
    
    
  //   </ScrollView>
  //   </View>
    