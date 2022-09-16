import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import logoImage  from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { THEME } from '../../theme';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { GameParams } from '../../@types/navigation';

export function Game() {

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          
          <Image
            source={logoImage}
            style={styles.logo}
          />

          <View style={styles.right}/>         
        </View>

        <Image 
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode= 'cover'
        />
        
        <Heading 
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

      </SafeAreaView>
    </Background>
  );
}