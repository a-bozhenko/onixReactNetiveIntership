import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, SectionList, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  ContainerWrapper, Footer,
} from '../../components';
import SectionTypeChangeButtons from './components/SectionTypeChangeButtons';
import { LIST_TYPES } from '../../constants';
import data from './data';
import { prepareSections } from '../../helpers';

const ListScreen = function () {
  const [selectedListType, setSelectedListType] = useState(LIST_TYPES.LIST_ITEMS);
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    if (selectedListType === LIST_TYPES.SECTION_LIST) {
      setSectionData(prepareSections(data));
    }
  }, [selectedListType]);

  const drawListItems = () => {
    return (
      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          renderItem={itemRenderer}
          keyExtractor={(row) => row.id}
        />
      </View>
    );
  };

  const drawSections = () => {
    return (
      <View style={styles.listWrapper}>

        <SectionList
          sections={sectionData}
          keyExtractor={(item) => {
            return (item.id);
          }}
          renderItem={itemRenderer}
          renderSectionHeader={sectionRenderer}
          renderSectionFooter={sectionFooterRenderer}
        />
      </View>
    );
  };

  const sectionRenderer = (sectionObj) => {
    const { section } = sectionObj;
    return (
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionName}>{section.name}</Text>
      </View>
    );
  };

  const sectionFooterRenderer = () => {
    return <View style={styles.sectionFooter} />;
  };

  const itemRenderer = (itemObj) => {
    const { item } = itemObj;

    return (
      <View style={styles.itemWrapper}>
        <Image source={{ uri: item.logo_100px }} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={styles.root}
    >
      <ContainerWrapper noScroll>
        <View style={styles.infoWrapper}>
          <Text style={styles.textTitle}>Global lists:</Text>
          <SectionTypeChangeButtons
            onChange={(newListType) => {
              setSelectedListType(newListType);
            }}
            selected={selectedListType}
          />

          {selectedListType === LIST_TYPES.LIST_ITEMS && drawListItems()}
          {selectedListType === LIST_TYPES.SECTION_LIST && drawSections()}
        </View>
      </ContainerWrapper>
      <Footer />
    </SafeAreaView>
  );
};

export default ListScreen;
