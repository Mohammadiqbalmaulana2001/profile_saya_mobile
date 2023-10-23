import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';


export default function Home() {
  return (
    <ScrollView>
      <View style={tw`flex mt-8 ml-5 mr-5 `}>
        <Text style={tw`text-4xl font-bold text-black`}>Ayo belajar  </Text>
        <Text style={tw`text-4xl font-bold mt-2 text-black`}>Membuat </Text>
        <Text style={tw`text-4xl font-bold mt-2 text-black`}>Sebuah aplikasi</Text>
        <Text style={tw`mt-8 text-lg text-black`}>Bersama saya <Text style={tw`font-bold text-pink-500`}>Mohammad Iqbal maulana</Text> seorang sofware developer yang suka sharing cara membuat aplikas dalam banyak bahasa pemrograman dan multi platform.</Text>

        <TouchableOpacity 
            style={[tw`bg-pink-500 py-2 px-10 rounded-full mt-5 shadow-lg`, { width: 157}]}
            onPress={() => {
              alert('Tombol telah ditekan!');
            }}
          >
            <Text style={tw`text-white font-bold`}>
              Mulai Belajar
            </Text>
        </TouchableOpacity>

        <Image
          source={require('../images/iqbal.png')}
          style={[tw`rounded-full mt-5 `, { width: 150, height:200 , alignSelf: 'center' }]}
          resizeMode="cover"
        />

      </View>
    </ScrollView>
  )
};

