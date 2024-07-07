import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';

const AffirmationPractice = () => {
    const {itemid} = useLocalSearchParams();
    const [affirmation, setAffirmation] =  useState<GalleryPreviewData>();
    useEffect(()=> {
        for (let idx = 0; idx <AFFIRMATION_GALLERY.length; idx++){
            const affirmationData = AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart = affirmationData.find((a)=>a.id === Number(itemid));
            if(affirmationToStart){
                setAffirmation(affirmationToStart);
                return;
            }

        }
    }, [])
    return (
        <View className='flex-1'>
            <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1'>
                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Text>Test</Text>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default AffirmationPractice