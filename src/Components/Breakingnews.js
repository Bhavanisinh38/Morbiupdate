import React, { useEffect } from 'react';

// Css Link
import '../css/breakingnews.css'

function Breakingnews() {
    useEffect(() => {
        const $ = window.$;
        $(document).ready(function() {   
            $(".brealink-slider-bx").infiniteslide({ speed: 70, pauseonhover: false, clone: 2 });
        });
    });
    return (
        <>
        <div className="brealink-outer">
            <div className="breking-tag">બ્રેકિંગ</div>
            <div className="brealink-slider-bx">
                <div>અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                <div>ગાળા ગામે વારંવાર ખોટી ફરિયાદ નોંધવામાં આવતી હોવાની રાવ સાથે ગ્રામજનોનું કલેકટરને આવેદન</div>
                <div>રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                <div>Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                <div>#Morbi – લક્ષ્મીનારાયણ સોસાયટીમાં જમીન પચાવવાનું ષડયંત્ર ! તંત્ર ભુમાફિયા સામે દાખલો બેસાડે તેવી કડક કાર્યવાહી કરવા રહીશોની માંગ</div>
                <div>કાગળનું બંડલ પકડાવી બેંકોના ગ્રાહકોને છેતરતી “ગડ્ડી ગેંગ”ના મુખ્ય સૂત્રધારને ભરૂચ LCBએ પકડ્યો</div>
            </div>
        </div>
        </>
    );
}

export default Breakingnews;