// Pixel Art Sprites for Pokemon Frost & Flame
// 64x64 detailed pixel art sprites

const SPRITES = {
    // IGNEWT - Fire newt with flame tail (64x64)
    ignewt: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="60" rx="16" ry="4" fill="rgba(0,0,0,0.2)"/>

            <!-- Back legs -->
            <rect x="18" y="44" width="6" height="12" fill="#cc4400"/>
            <rect x="40" y="44" width="6" height="12" fill="#cc4400"/>
            <rect x="17" y="54" width="8" height="4" fill="#cc4400"/>
            <rect x="39" y="54" width="8" height="4" fill="#cc4400"/>

            <!-- Tail -->
            <rect x="44" y="34" width="8" height="6" fill="#ff5500"/>
            <rect x="50" y="32" width="6" height="8" fill="#ff5500"/>

            <!-- Tail flame -->
            <rect x="54" y="28" width="6" height="10" fill="#ff4400"/>
            <rect x="56" y="24" width="5" height="8" fill="#ff6600"/>
            <rect x="58" y="20" width="4" height="8" fill="#ffaa00"/>
            <rect x="59" y="16" width="3" height="6" fill="#ffcc00"/>
            <rect x="60" y="12" width="2" height="6" fill="#ffee66"/>
            <rect x="56" y="30" width="3" height="4" fill="#ffcc00"/>

            <!-- Body -->
            <rect x="16" y="32" width="30" height="16" fill="#ff5500"/>
            <rect x="14" y="34" width="4" height="12" fill="#ff5500"/>

            <!-- Body spots -->
            <rect x="20" y="36" width="4" height="4" fill="#ff7733"/>
            <rect x="30" y="38" width="4" height="4" fill="#ff7733"/>
            <rect x="38" y="36" width="3" height="3" fill="#ff7733"/>

            <!-- Belly -->
            <rect x="18" y="42" width="26" height="6" fill="#ffaa66"/>
            <rect x="20" y="40" width="22" height="4" fill="#ffcc88"/>

            <!-- Neck -->
            <rect x="14" y="28" width="8" height="8" fill="#ff5500"/>

            <!-- Head -->
            <rect x="6" y="18" width="18" height="14" fill="#ff5500"/>
            <rect x="4" y="20" width="4" height="10" fill="#ff5500"/>
            <rect x="22" y="20" width="4" height="8" fill="#ff5500"/>

            <!-- Snout -->
            <rect x="2" y="24" width="6" height="6" fill="#ff5500"/>
            <rect x="2" y="26" width="4" height="4" fill="#ff7744"/>

            <!-- Nostrils -->
            <rect x="3" y="26" width="2" height="2" fill="#aa3300"/>

            <!-- Eye whites -->
            <rect x="8" y="20" width="6" height="6" fill="#ffffff"/>
            <rect x="16" y="20" width="6" height="6" fill="#ffffff"/>

            <!-- Eye pupils (centered/forward) -->
            <rect x="9" y="21" width="4" height="4" fill="#222222"/>
            <rect x="17" y="21" width="4" height="4" fill="#222222"/>

            <!-- Eye shine -->
            <rect x="9" y="21" width="2" height="2" fill="#ffffff"/>
            <rect x="17" y="21" width="2" height="2" fill="#ffffff"/>

            <!-- Head crest -->
            <rect x="10" y="14" width="4" height="6" fill="#ff4400"/>
            <rect x="16" y="16" width="4" height="4" fill="#ff4400"/>
            <rect x="11" y="12" width="2" height="4" fill="#ff6600"/>

            <!-- Front legs -->
            <rect x="12" y="44" width="5" height="10" fill="#ff5500"/>
            <rect x="11" y="52" width="7" height="4" fill="#ff5500"/>

            <!-- Claws -->
            <rect x="11" y="55" width="2" height="2" fill="#ffcc88"/>
            <rect x="14" y="55" width="2" height="2" fill="#ffcc88"/>
            <rect x="17" y="55" width="2" height="2" fill="#ffcc88"/>
            <rect x="39" y="55" width="2" height="2" fill="#ffcc88"/>
            <rect x="42" y="55" width="2" height="2" fill="#ffcc88"/>
            <rect x="45" y="55" width="2" height="2" fill="#ffcc88"/>
        </svg>
    `,

    // SEARAMANDER - Evolved fire salamander (64x64)
    searamander: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="60" rx="20" ry="4" fill="rgba(0,0,0,0.2)"/>

            <!-- Back flames -->
            <rect x="20" y="12" width="4" height="10" fill="#ff4400"/>
            <rect x="21" y="8" width="3" height="6" fill="#ff6600"/>
            <rect x="22" y="5" width="2" height="5" fill="#ffaa00"/>

            <rect x="28" y="10" width="4" height="12" fill="#ff4400"/>
            <rect x="29" y="6" width="3" height="6" fill="#ff6600"/>
            <rect x="30" y="3" width="2" height="5" fill="#ffcc00"/>

            <rect x="36" y="12" width="4" height="10" fill="#ff4400"/>
            <rect x="37" y="8" width="3" height="6" fill="#ff6600"/>
            <rect x="38" y="5" width="2" height="5" fill="#ffaa00"/>

            <!-- Tail -->
            <rect x="48" y="30" width="10" height="8" fill="#dd4400"/>
            <rect x="54" y="26" width="8" height="10" fill="#dd4400"/>

            <!-- Tail flame -->
            <rect x="58" y="22" width="5" height="12" fill="#ff4400"/>
            <rect x="60" y="18" width="4" height="10" fill="#ff6600"/>
            <rect x="61" y="14" width="3" height="8" fill="#ffaa00"/>
            <rect x="62" y="10" width="2" height="6" fill="#ffcc00"/>

            <!-- Body -->
            <rect x="12" y="24" width="40" height="20" fill="#dd4400"/>
            <rect x="10" y="28" width="6" height="14" fill="#dd4400"/>

            <!-- Belly -->
            <rect x="16" y="36" width="32" height="8" fill="#ffaa66"/>

            <!-- Back legs -->
            <rect x="38" y="42" width="8" height="14" fill="#dd4400"/>
            <rect x="36" y="54" width="12" height="4" fill="#dd4400"/>

            <!-- Front legs -->
            <rect x="14" y="40" width="8" height="14" fill="#dd4400"/>
            <rect x="12" y="52" width="12" height="4" fill="#dd4400"/>

            <!-- Claws -->
            <rect x="12" y="55" width="3" height="3" fill="#ffcc88"/>
            <rect x="16" y="55" width="3" height="3" fill="#ffcc88"/>
            <rect x="20" y="55" width="3" height="3" fill="#ffcc88"/>
            <rect x="36" y="55" width="3" height="3" fill="#ffcc88"/>
            <rect x="40" y="55" width="3" height="3" fill="#ffcc88"/>
            <rect x="44" y="55" width="3" height="3" fill="#ffcc88"/>

            <!-- Neck -->
            <rect x="8" y="20" width="10" height="12" fill="#dd4400"/>

            <!-- Head -->
            <rect x="2" y="12" width="18" height="16" fill="#dd4400"/>
            <rect x="0" y="16" width="4" height="10" fill="#dd4400"/>

            <!-- Jaw -->
            <rect x="0" y="24" width="12" height="6" fill="#dd4400"/>
            <rect x="2" y="26" width="8" height="4" fill="#cc6644"/>

            <!-- Teeth -->
            <rect x="2" y="24" width="2" height="3" fill="#ffffff"/>
            <rect x="5" y="24" width="2" height="3" fill="#ffffff"/>
            <rect x="8" y="24" width="2" height="3" fill="#ffffff"/>

            <!-- Eyes -->
            <rect x="4" y="14" width="6" height="6" fill="#ffffff"/>
            <rect x="12" y="14" width="6" height="6" fill="#ffffff"/>
            <rect x="5" y="15" width="4" height="4" fill="#222222"/>
            <rect x="13" y="15" width="4" height="4" fill="#222222"/>
            <rect x="5" y="15" width="2" height="2" fill="#ffffff"/>
            <rect x="13" y="15" width="2" height="2" fill="#ffffff"/>
        </svg>
    `,

    // INFERNOSAUR - Final fire evolution (64x64)
    infernosaur: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="62" rx="22" ry="4" fill="rgba(0,0,0,0.3)"/>

            <!-- Flame mane -->
            <rect x="16" y="2" width="6" height="14" fill="#ff4400"/>
            <rect x="17" y="0" width="4" height="6" fill="#ffaa00"/>
            <rect x="24" y="0" width="6" height="16" fill="#ff6600"/>
            <rect x="25" y="0" width="4" height="4" fill="#ffcc00"/>
            <rect x="32" y="2" width="6" height="14" fill="#ff4400"/>
            <rect x="33" y="0" width="4" height="6" fill="#ffaa00"/>
            <rect x="40" y="4" width="5" height="12" fill="#ff6600"/>
            <rect x="41" y="2" width="3" height="4" fill="#ffcc00"/>

            <!-- Tail flame -->
            <rect x="56" y="28" width="6" height="12" fill="#ff4400"/>
            <rect x="58" y="24" width="5" height="10" fill="#ff6600"/>
            <rect x="60" y="20" width="4" height="8" fill="#ffaa00"/>
            <rect x="61" y="16" width="3" height="6" fill="#ffcc00"/>

            <!-- Tail -->
            <rect x="48" y="32" width="10" height="8" fill="#aa2200"/>

            <!-- Body -->
            <rect x="12" y="20" width="40" height="26" fill="#bb3300"/>

            <!-- Belly -->
            <rect x="16" y="34" width="30" height="12" fill="#ff8844"/>

            <!-- Back legs -->
            <rect x="36" y="44" width="10" height="16" fill="#aa2200"/>
            <rect x="34" y="56" width="14" height="6" fill="#aa2200"/>

            <!-- Front legs -->
            <rect x="14" y="42" width="10" height="16" fill="#bb3300"/>
            <rect x="12" y="54" width="14" height="6" fill="#bb3300"/>

            <!-- Claws -->
            <rect x="12" y="58" width="4" height="4" fill="#ffcc88"/>
            <rect x="17" y="58" width="4" height="4" fill="#ffcc88"/>
            <rect x="22" y="58" width="4" height="4" fill="#ffcc88"/>
            <rect x="34" y="58" width="4" height="4" fill="#ffcc88"/>
            <rect x="39" y="58" width="4" height="4" fill="#ffcc88"/>
            <rect x="44" y="58" width="4" height="4" fill="#ffcc88"/>

            <!-- Neck -->
            <rect x="6" y="16" width="12" height="14" fill="#bb3300"/>

            <!-- Head -->
            <rect x="0" y="8" width="18" height="18" fill="#bb3300"/>

            <!-- Jaw -->
            <rect x="0" y="22" width="14" height="8" fill="#aa2200"/>
            <rect x="2" y="26" width="10" height="4" fill="#884422"/>

            <!-- Teeth -->
            <rect x="2" y="22" width="2" height="4" fill="#ffffff"/>
            <rect x="5" y="22" width="2" height="4" fill="#ffffff"/>
            <rect x="8" y="22" width="2" height="4" fill="#ffffff"/>
            <rect x="11" y="22" width="2" height="4" fill="#ffffff"/>

            <!-- Eyes -->
            <rect x="4" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="12" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="5" y="13" width="4" height="4" fill="#222222"/>
            <rect x="13" y="13" width="4" height="4" fill="#222222"/>
            <rect x="5" y="13" width="2" height="2" fill="#ffffff"/>
            <rect x="13" y="13" width="2" height="2" fill="#ffffff"/>

            <!-- Horns -->
            <rect x="2" y="4" width="4" height="8" fill="#662200"/>
            <rect x="14" y="4" width="4" height="8" fill="#662200"/>
            <rect x="3" y="2" width="2" height="4" fill="#884422"/>
            <rect x="15" y="2" width="2" height="4" fill="#884422"/>
        </svg>
    `,

    // OTTIDE - Cute water otter (64x64)
    ottide: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="60" rx="16" ry="4" fill="rgba(0,0,0,0.2)"/>

            <!-- Tail -->
            <rect x="46" y="38" width="10" height="6" fill="#3498db"/>
            <rect x="52" y="36" width="8" height="8" fill="#2980b9"/>
            <rect x="56" y="34" width="6" height="10" fill="#3498db"/>

            <!-- Wave pattern on tail -->
            <rect x="54" y="38" width="4" height="2" fill="#5dade2"/>
            <rect x="56" y="36" width="2" height="2" fill="#85c1e9"/>

            <!-- Body -->
            <rect x="20" y="30" width="28" height="20" fill="#3498db"/>
            <rect x="18" y="34" width="6" height="14" fill="#3498db"/>

            <!-- Belly -->
            <rect x="24" y="38" width="20" height="12" fill="#aed6f1"/>
            <rect x="26" y="36" width="16" height="4" fill="#d4e6f1"/>

            <!-- Wave pattern on belly -->
            <rect x="28" y="42" width="6" height="2" fill="#85c1e9"/>
            <rect x="36" y="44" width="6" height="2" fill="#85c1e9"/>

            <!-- Back legs -->
            <rect x="38" y="48" width="8" height="10" fill="#3498db"/>
            <rect x="36" y="54" width="12" height="6" fill="#3498db"/>

            <!-- Front legs -->
            <rect x="20" y="46" width="8" height="10" fill="#3498db"/>
            <rect x="18" y="52" width="12" height="6" fill="#3498db"/>

            <!-- Paw pads -->
            <rect x="20" y="55" width="3" height="3" fill="#2471a3"/>
            <rect x="24" y="55" width="3" height="3" fill="#2471a3"/>
            <rect x="38" y="55" width="3" height="3" fill="#2471a3"/>
            <rect x="42" y="55" width="3" height="3" fill="#2471a3"/>

            <!-- Head -->
            <rect x="12" y="14" width="24" height="22" fill="#3498db"/>
            <rect x="10" y="18" width="4" height="14" fill="#3498db"/>
            <rect x="34" y="18" width="4" height="14" fill="#3498db"/>

            <!-- Ears -->
            <rect x="12" y="10" width="6" height="8" fill="#3498db"/>
            <rect x="30" y="10" width="6" height="8" fill="#3498db"/>
            <rect x="14" y="12" width="3" height="4" fill="#aed6f1"/>
            <rect x="31" y="12" width="3" height="4" fill="#aed6f1"/>

            <!-- Face -->
            <rect x="16" y="24" width="16" height="10" fill="#aed6f1"/>

            <!-- Eyes -->
            <rect x="14" y="18" width="6" height="6" fill="#ffffff"/>
            <rect x="26" y="18" width="6" height="6" fill="#ffffff"/>
            <rect x="15" y="19" width="4" height="4" fill="#222222"/>
            <rect x="27" y="19" width="4" height="4" fill="#222222"/>
            <rect x="15" y="19" width="2" height="2" fill="#ffffff"/>
            <rect x="27" y="19" width="2" height="2" fill="#ffffff"/>

            <!-- Nose -->
            <rect x="21" y="26" width="6" height="4" fill="#1a252f"/>
            <rect x="22" y="27" width="4" height="2" fill="#2c3e50"/>

            <!-- Mouth -->
            <rect x="22" y="30" width="4" height="2" fill="#1a252f"/>

            <!-- Whiskers -->
            <rect x="6" y="26" width="8" height="2" fill="#1a252f"/>
            <rect x="6" y="30" width="6" height="2" fill="#1a252f"/>
            <rect x="34" y="26" width="8" height="2" fill="#1a252f"/>
            <rect x="36" y="30" width="6" height="2" fill="#1a252f"/>

            <!-- Cheek spots -->
            <rect x="10" y="28" width="4" height="4" fill="#5dade2"/>
            <rect x="34" y="28" width="4" height="4" fill="#5dade2"/>
        </svg>
    `,

    // RIPTAIL - Evolved water otter (64x64)
    riptail: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="60" rx="18" ry="4" fill="rgba(0,0,0,0.2)"/>

            <!-- Water swirl tail -->
            <rect x="48" y="32" width="8" height="8" fill="#2980b9"/>
            <rect x="52" y="28" width="8" height="12" fill="#3498db"/>
            <rect x="56" y="24" width="6" height="14" fill="#5dade2"/>
            <rect x="58" y="20" width="4" height="10" fill="#85c1e9"/>
            <rect x="59" y="16" width="3" height="6" fill="#aed6f1"/>

            <!-- Body -->
            <rect x="16" y="26" width="36" height="22" fill="#2980b9"/>
            <rect x="14" y="30" width="6" height="16" fill="#2980b9"/>

            <!-- Wave stripes -->
            <rect x="18" y="32" width="30" height="2" fill="#5dade2"/>
            <rect x="18" y="38" width="30" height="2" fill="#5dade2"/>
            <rect x="18" y="44" width="30" height="2" fill="#5dade2"/>

            <!-- Belly -->
            <rect x="20" y="40" width="26" height="8" fill="#85c1e9"/>

            <!-- Back legs -->
            <rect x="40" y="46" width="8" height="12" fill="#2980b9"/>
            <rect x="38" y="54" width="12" height="6" fill="#2980b9"/>

            <!-- Front legs -->
            <rect x="16" y="44" width="8" height="12" fill="#2980b9"/>
            <rect x="14" y="52" width="12" height="6" fill="#2980b9"/>

            <!-- Claws -->
            <rect x="14" y="56" width="3" height="3" fill="#aed6f1"/>
            <rect x="18" y="56" width="3" height="3" fill="#aed6f1"/>
            <rect x="22" y="56" width="3" height="3" fill="#aed6f1"/>
            <rect x="38" y="56" width="3" height="3" fill="#aed6f1"/>
            <rect x="42" y="56" width="3" height="3" fill="#aed6f1"/>
            <rect x="46" y="56" width="3" height="3" fill="#aed6f1"/>

            <!-- Neck -->
            <rect x="10" y="20" width="12" height="14" fill="#2980b9"/>

            <!-- Head -->
            <rect x="4" y="10" width="20" height="18" fill="#2980b9"/>
            <rect x="2" y="14" width="4" height="12" fill="#2980b9"/>

            <!-- Ears -->
            <rect x="6" y="6" width="6" height="8" fill="#2980b9"/>
            <rect x="18" y="6" width="6" height="8" fill="#2980b9"/>
            <rect x="8" y="8" width="3" height="4" fill="#85c1e9"/>
            <rect x="19" y="8" width="3" height="4" fill="#85c1e9"/>

            <!-- Face -->
            <rect x="8" y="20" width="12" height="6" fill="#85c1e9"/>

            <!-- Eyes -->
            <rect x="6" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="16" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="7" y="13" width="4" height="4" fill="#222222"/>
            <rect x="17" y="13" width="4" height="4" fill="#222222"/>
            <rect x="7" y="13" width="2" height="2" fill="#ffffff"/>
            <rect x="17" y="13" width="2" height="2" fill="#ffffff"/>

            <!-- Nose -->
            <rect x="10" y="22" width="6" height="4" fill="#1a252f"/>

            <!-- Fin crest -->
            <rect x="12" y="4" width="4" height="8" fill="#5dade2"/>
            <rect x="13" y="2" width="2" height="4" fill="#85c1e9"/>
        </svg>
    `,

    // MAELSTRIX - Final water evolution (64x64)
    maelstrix: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="62" rx="22" ry="4" fill="rgba(0,0,0,0.3)"/>

            <!-- Maelstrom tail -->
            <rect x="48" y="28" width="8" height="10" fill="#1a5276"/>
            <rect x="52" y="24" width="8" height="14" fill="#2980b9"/>
            <rect x="56" y="20" width="6" height="16" fill="#3498db"/>
            <rect x="58" y="16" width="5" height="12" fill="#5dade2"/>
            <rect x="60" y="12" width="4" height="10" fill="#85c1e9"/>
            <rect x="61" y="8" width="3" height="8" fill="#aed6f1"/>

            <!-- Body -->
            <rect x="10" y="22" width="42" height="26" fill="#1a5276"/>

            <!-- Water armor plates -->
            <rect x="12" y="26" width="6" height="18" fill="#2980b9"/>
            <rect x="46" y="26" width="6" height="18" fill="#2980b9"/>
            <rect x="22" y="22" width="16" height="4" fill="#2980b9"/>

            <!-- Belly -->
            <rect x="16" y="38" width="30" height="10" fill="#5dade2"/>

            <!-- Back legs -->
            <rect x="38" y="46" width="10" height="14" fill="#1a5276"/>
            <rect x="36" y="56" width="14" height="6" fill="#1a5276"/>

            <!-- Front legs -->
            <rect x="14" y="44" width="10" height="14" fill="#1a5276"/>
            <rect x="12" y="54" width="14" height="6" fill="#1a5276"/>

            <!-- Claws -->
            <rect x="12" y="58" width="4" height="4" fill="#85c1e9"/>
            <rect x="17" y="58" width="4" height="4" fill="#85c1e9"/>
            <rect x="22" y="58" width="4" height="4" fill="#85c1e9"/>
            <rect x="36" y="58" width="4" height="4" fill="#85c1e9"/>
            <rect x="41" y="58" width="4" height="4" fill="#85c1e9"/>
            <rect x="46" y="58" width="4" height="4" fill="#85c1e9"/>

            <!-- Neck -->
            <rect x="4" y="18" width="14" height="14" fill="#1a5276"/>

            <!-- Head -->
            <rect x="0" y="8" width="18" height="18" fill="#1a5276"/>

            <!-- Crest/Fin -->
            <rect x="8" y="0" width="4" height="10" fill="#2980b9"/>
            <rect x="12" y="2" width="4" height="8" fill="#3498db"/>
            <rect x="16" y="4" width="3" height="6" fill="#5dade2"/>
            <rect x="9" y="0" width="2" height="4" fill="#85c1e9"/>

            <!-- Eyes -->
            <rect x="2" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="12" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="3" y="13" width="4" height="4" fill="#222222"/>
            <rect x="13" y="13" width="4" height="4" fill="#222222"/>
            <rect x="3" y="13" width="2" height="2" fill="#ffffff"/>
            <rect x="13" y="13" width="2" height="2" fill="#ffffff"/>

            <!-- Snout -->
            <rect x="0" y="20" width="8" height="6" fill="#1a5276"/>
            <rect x="0" y="22" width="6" height="4" fill="#2471a3"/>

            <!-- Teeth hints -->
            <rect x="2" y="24" width="2" height="2" fill="#aed6f1"/>
            <rect x="5" y="24" width="2" height="2" fill="#aed6f1"/>
        </svg>
    `,

    // PETALOPE - Cute grass fawn (64x64)
    petalope: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="60" rx="14" ry="3" fill="rgba(0,0,0,0.2)"/>

            <!-- Back flower petals -->
            <rect x="30" y="20" width="6" height="6" fill="#ff69b4"/>
            <rect x="36" y="18" width="6" height="6" fill="#ff1493"/>
            <rect x="26" y="22" width="5" height="5" fill="#ff69b4"/>
            <rect x="40" y="20" width="5" height="5" fill="#ff69b4"/>
            <rect x="33" y="22" width="4" height="4" fill="#ffcc00"/>

            <!-- Tail -->
            <rect x="46" y="34" width="8" height="6" fill="#58d68d"/>
            <rect x="52" y="32" width="6" height="8" fill="#82e0aa"/>

            <!-- Leaf on tail -->
            <rect x="54" y="30" width="4" height="4" fill="#27ae60"/>
            <rect x="56" y="28" width="3" height="3" fill="#2ecc71"/>

            <!-- Body -->
            <rect x="22" y="28" width="26" height="18" fill="#58d68d"/>
            <rect x="20" y="32" width="6" height="12" fill="#58d68d"/>

            <!-- Belly spots -->
            <rect x="26" y="36" width="18" height="10" fill="#82e0aa"/>
            <rect x="28" y="38" width="4" height="4" fill="#abebc6"/>
            <rect x="36" y="40" width="4" height="4" fill="#abebc6"/>

            <!-- Back legs -->
            <rect x="40" y="44" width="6" height="14" fill="#58d68d"/>
            <rect x="38" y="54" width="10" height="6" fill="#58d68d"/>

            <!-- Front legs -->
            <rect x="22" y="42" width="6" height="14" fill="#58d68d"/>
            <rect x="20" y="52" width="10" height="6" fill="#58d68d"/>

            <!-- Hooves -->
            <rect x="20" y="56" width="10" height="4" fill="#5d4037"/>
            <rect x="38" y="56" width="10" height="4" fill="#5d4037"/>

            <!-- Neck -->
            <rect x="14" y="22" width="10" height="14" fill="#58d68d"/>

            <!-- Head -->
            <rect x="6" y="8" width="18" height="18" fill="#58d68d"/>
            <rect x="4" y="12" width="4" height="12" fill="#58d68d"/>

            <!-- Ears -->
            <rect x="4" y="4" width="6" height="10" fill="#58d68d"/>
            <rect x="20" y="4" width="6" height="10" fill="#58d68d"/>
            <rect x="6" y="6" width="3" height="6" fill="#f9e79f"/>
            <rect x="21" y="6" width="3" height="6" fill="#f9e79f"/>

            <!-- Face -->
            <rect x="10" y="18" width="10" height="6" fill="#82e0aa"/>

            <!-- Eyes -->
            <rect x="8" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="18" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="9" y="13" width="4" height="4" fill="#222222"/>
            <rect x="19" y="13" width="4" height="4" fill="#222222"/>
            <rect x="9" y="13" width="2" height="2" fill="#ffffff"/>
            <rect x="19" y="13" width="2" height="2" fill="#ffffff"/>

            <!-- Nose -->
            <rect x="12" y="20" width="6" height="4" fill="#f5b7b1"/>
            <rect x="14" y="21" width="2" height="2" fill="#e6b0aa"/>

            <!-- Blush -->
            <rect x="6" y="18" width="4" height="3" fill="#f8bbd0"/>
            <rect x="22" y="18" width="4" height="3" fill="#f8bbd0"/>
        </svg>
    `,

    // VERDOE - Evolved grass doe (64x64)
    verdoe: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="62" rx="16" ry="3" fill="rgba(0,0,0,0.2)"/>

            <!-- Leaf crown -->
            <rect x="10" y="2" width="4" height="8" fill="#27ae60"/>
            <rect x="14" y="0" width="4" height="10" fill="#2ecc71"/>
            <rect x="18" y="2" width="3" height="6" fill="#58d68d"/>
            <rect x="12" y="0" width="2" height="4" fill="#82e0aa"/>

            <!-- Flower on side -->
            <rect x="28" y="24" width="6" height="6" fill="#f1948a"/>
            <rect x="30" y="26" width="2" height="2" fill="#f9e79f"/>
            <rect x="34" y="22" width="5" height="5" fill="#f5b7b1"/>

            <!-- Tail with leaves -->
            <rect x="48" y="32" width="10" height="6" fill="#58d68d"/>
            <rect x="54" y="28" width="6" height="10" fill="#27ae60"/>
            <rect x="58" y="26" width="4" height="8" fill="#2ecc71"/>
            <rect x="60" y="24" width="3" height="6" fill="#58d68d"/>

            <!-- Body -->
            <rect x="18" y="26" width="34" height="20" fill="#58d68d"/>
            <rect x="16" y="30" width="6" height="14" fill="#58d68d"/>

            <!-- Belly -->
            <rect x="22" y="36" width="26" height="10" fill="#abebc6"/>

            <!-- Back legs -->
            <rect x="42" y="44" width="7" height="16" fill="#58d68d"/>
            <rect x="40" y="56" width="11" height="6" fill="#58d68d"/>

            <!-- Front legs -->
            <rect x="18" y="42" width="7" height="16" fill="#58d68d"/>
            <rect x="16" y="54" width="11" height="6" fill="#58d68d"/>

            <!-- Hooves -->
            <rect x="16" y="58" width="11" height="4" fill="#5d4037"/>
            <rect x="40" y="58" width="11" height="4" fill="#5d4037"/>

            <!-- Neck -->
            <rect x="10" y="18" width="12" height="16" fill="#58d68d"/>

            <!-- Head -->
            <rect x="4" y="6" width="18" height="18" fill="#58d68d"/>
            <rect x="2" y="10" width="4" height="12" fill="#58d68d"/>

            <!-- Ears -->
            <rect x="2" y="2" width="6" height="10" fill="#58d68d"/>
            <rect x="18" y="2" width="6" height="10" fill="#58d68d"/>
            <rect x="4" y="4" width="3" height="6" fill="#82e0aa"/>
            <rect x="19" y="4" width="3" height="6" fill="#82e0aa"/>

            <!-- Face -->
            <rect x="8" y="16" width="10" height="6" fill="#82e0aa"/>

            <!-- Eyes -->
            <rect x="6" y="10" width="6" height="6" fill="#ffffff"/>
            <rect x="16" y="10" width="6" height="6" fill="#ffffff"/>
            <rect x="7" y="11" width="4" height="4" fill="#222222"/>
            <rect x="17" y="11" width="4" height="4" fill="#222222"/>
            <rect x="7" y="11" width="2" height="2" fill="#ffffff"/>
            <rect x="17" y="11" width="2" height="2" fill="#ffffff"/>

            <!-- Nose -->
            <rect x="10" y="18" width="6" height="4" fill="#e8daef"/>

            <!-- Vine pattern on body -->
            <rect x="26" y="30" width="2" height="14" fill="#229954"/>
            <rect x="36" y="30" width="2" height="14" fill="#229954"/>
        </svg>
    `,

    // SYLVANTLER - Final grass evolution (64x64)
    sylvantler: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="62" rx="20" ry="4" fill="rgba(0,0,0,0.3)"/>

            <!-- Branch antlers -->
            <rect x="4" y="4" width="4" height="12" fill="#5d4037"/>
            <rect x="2" y="2" width="4" height="6" fill="#5d4037"/>
            <rect x="8" y="6" width="4" height="8" fill="#5d4037"/>
            <rect x="0" y="0" width="4" height="4" fill="#2ecc71"/>
            <rect x="6" y="2" width="4" height="4" fill="#58d68d"/>
            <rect x="10" y="4" width="3" height="4" fill="#82e0aa"/>

            <rect x="20" y="4" width="4" height="12" fill="#5d4037"/>
            <rect x="22" y="2" width="4" height="6" fill="#5d4037"/>
            <rect x="16" y="6" width="4" height="8" fill="#5d4037"/>
            <rect x="24" y="0" width="4" height="4" fill="#2ecc71"/>
            <rect x="18" y="2" width="4" height="4" fill="#58d68d"/>
            <rect x="14" y="4" width="3" height="4" fill="#82e0aa"/>

            <!-- Tail with leaves -->
            <rect x="50" y="30" width="10" height="8" fill="#27ae60"/>
            <rect x="56" y="26" width="6" height="12" fill="#2ecc71"/>
            <rect x="58" y="22" width="5" height="10" fill="#58d68d"/>
            <rect x="60" y="18" width="4" height="8" fill="#82e0aa"/>

            <!-- Body -->
            <rect x="14" y="24" width="40" height="24" fill="#27ae60"/>

            <!-- Chest flower -->
            <rect x="14" y="28" width="8" height="8" fill="#f1948a"/>
            <rect x="16" y="30" width="4" height="4" fill="#f9e79f"/>

            <!-- Belly with moss pattern -->
            <rect x="18" y="38" width="32" height="10" fill="#58d68d"/>
            <rect x="22" y="40" width="4" height="6" fill="#82e0aa"/>
            <rect x="32" y="40" width="4" height="6" fill="#82e0aa"/>
            <rect x="42" y="40" width="4" height="6" fill="#82e0aa"/>

            <!-- Vine patterns -->
            <rect x="24" y="28" width="2" height="18" fill="#229954"/>
            <rect x="36" y="28" width="2" height="18" fill="#229954"/>
            <rect x="46" y="28" width="2" height="18" fill="#229954"/>

            <!-- Back legs -->
            <rect x="42" y="46" width="8" height="14" fill="#27ae60"/>
            <rect x="40" y="56" width="12" height="6" fill="#27ae60"/>

            <!-- Front legs -->
            <rect x="16" y="44" width="8" height="14" fill="#27ae60"/>
            <rect x="14" y="54" width="12" height="6" fill="#27ae60"/>

            <!-- Hooves -->
            <rect x="14" y="58" width="12" height="4" fill="#4e342e"/>
            <rect x="40" y="58" width="12" height="4" fill="#4e342e"/>

            <!-- Neck -->
            <rect x="6" y="16" width="14" height="16" fill="#27ae60"/>

            <!-- Head -->
            <rect x="0" y="8" width="18" height="18" fill="#27ae60"/>

            <!-- Eyes -->
            <rect x="2" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="12" y="12" width="6" height="6" fill="#ffffff"/>
            <rect x="3" y="13" width="4" height="4" fill="#222222"/>
            <rect x="13" y="13" width="4" height="4" fill="#222222"/>
            <rect x="3" y="13" width="2" height="2" fill="#ffffff"/>
            <rect x="13" y="13" width="2" height="2" fill="#ffffff"/>

            <!-- Snout -->
            <rect x="4" y="20" width="10" height="6" fill="#58d68d"/>
            <rect x="6" y="22" width="6" height="4" fill="#d5a6bd"/>
        </svg>
    `,

    // BREEZLING - Regional bird (64x64)
    breezling: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="58" rx="12" ry="3" fill="rgba(0,0,0,0.2)"/>

            <!-- Tail feathers -->
            <rect x="14" y="40" width="6" height="12" fill="#5d6d7e"/>
            <rect x="18" y="42" width="4" height="10" fill="#85929e"/>
            <rect x="10" y="44" width="6" height="8" fill="#5d6d7e"/>

            <!-- Body -->
            <rect x="22" y="30" width="22" height="20" fill="#aeb6bf"/>
            <rect x="20" y="34" width="4" height="14" fill="#aeb6bf"/>

            <!-- Belly -->
            <rect x="26" y="36" width="14" height="12" fill="#f2f3f4"/>
            <rect x="28" y="38" width="10" height="8" fill="#fdfefe"/>

            <!-- Wing -->
            <rect x="38" y="32" width="12" height="14" fill="#5d6d7e"/>
            <rect x="42" y="34" width="8" height="10" fill="#85929e"/>
            <rect x="46" y="36" width="6" height="8" fill="#aeb6bf"/>

            <!-- Wing stripes -->
            <rect x="40" y="38" width="8" height="2" fill="#f2f3f4"/>
            <rect x="42" y="42" width="6" height="2" fill="#f2f3f4"/>

            <!-- Feet -->
            <rect x="28" y="48" width="3" height="8" fill="#f5b041"/>
            <rect x="36" y="48" width="3" height="8" fill="#f5b041"/>
            <rect x="26" y="54" width="7" height="3" fill="#f5b041"/>
            <rect x="34" y="54" width="7" height="3" fill="#f5b041"/>

            <!-- Neck -->
            <rect x="24" y="24" width="14" height="10" fill="#aeb6bf"/>

            <!-- Head -->
            <rect x="20" y="10" width="20" height="18" fill="#aeb6bf"/>
            <rect x="18" y="14" width="4" height="12" fill="#aeb6bf"/>

            <!-- Head tuft -->
            <rect x="30" y="4" width="4" height="8" fill="#5d6d7e"/>
            <rect x="34" y="6" width="4" height="6" fill="#85929e"/>
            <rect x="32" y="2" width="3" height="6" fill="#85929e"/>

            <!-- Face -->
            <rect x="22" y="18" width="12" height="8" fill="#f2f3f4"/>

            <!-- Eyes -->
            <rect x="22" y="14" width="6" height="6" fill="#ffffff"/>
            <rect x="32" y="14" width="6" height="6" fill="#ffffff"/>
            <rect x="23" y="15" width="4" height="4" fill="#222222"/>
            <rect x="33" y="15" width="4" height="4" fill="#222222"/>
            <rect x="23" y="15" width="2" height="2" fill="#ffffff"/>
            <rect x="33" y="15" width="2" height="2" fill="#ffffff"/>

            <!-- Beak -->
            <rect x="26" y="22" width="8" height="4" fill="#f5b041"/>
            <rect x="24" y="24" width="4" height="3" fill="#f5b041"/>
            <rect x="26" y="23" width="6" height="2" fill="#f7dc6f"/>

            <!-- Cheek marks -->
            <rect x="18" y="20" width="4" height="3" fill="#f5b7b1"/>
            <rect x="38" y="20" width="4" height="3" fill="#f5b7b1"/>
        </svg>
    `,

    // NIBLIT - Small rodent (Normal type) (64x64)
    niblit: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="58" rx="12" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Tail -->
            <rect x="44" y="40" width="10" height="4" fill="#c9a87c"/>
            <rect x="52" y="38" width="6" height="6" fill="#d4b896"/>
            <!-- Body -->
            <rect x="20" y="32" width="26" height="18" fill="#d4b896"/>
            <rect x="18" y="36" width="4" height="12" fill="#d4b896"/>
            <!-- Belly -->
            <rect x="24" y="40" width="18" height="10" fill="#f5e6d3"/>
            <!-- Back legs -->
            <rect x="38" y="48" width="6" height="10" fill="#d4b896"/>
            <rect x="36" y="54" width="10" height="4" fill="#d4b896"/>
            <!-- Front legs -->
            <rect x="22" y="46" width="6" height="10" fill="#d4b896"/>
            <rect x="20" y="52" width="10" height="4" fill="#d4b896"/>
            <!-- Paws -->
            <rect x="20" y="54" width="3" height="3" fill="#c9a87c"/>
            <rect x="26" y="54" width="3" height="3" fill="#c9a87c"/>
            <rect x="36" y="54" width="3" height="3" fill="#c9a87c"/>
            <rect x="42" y="54" width="3" height="3" fill="#c9a87c"/>
            <!-- Head -->
            <rect x="16" y="16" width="22" height="20" fill="#d4b896"/>
            <rect x="14" y="20" width="4" height="14" fill="#d4b896"/>
            <!-- Ears -->
            <rect x="16" y="6" width="6" height="14" fill="#d4b896"/>
            <rect x="30" y="6" width="6" height="14" fill="#d4b896"/>
            <rect x="18" y="8" width="3" height="10" fill="#f5e6d3"/>
            <rect x="31" y="8" width="3" height="10" fill="#f5e6d3"/>
            <!-- Face -->
            <rect x="20" y="26" width="12" height="8" fill="#f5e6d3"/>
            <!-- Eyes -->
            <rect x="18" y="20" width="6" height="6" fill="#222222"/>
            <rect x="28" y="20" width="6" height="6" fill="#222222"/>
            <rect x="19" y="21" width="2" height="2" fill="#ffffff"/>
            <rect x="29" y="21" width="2" height="2" fill="#ffffff"/>
            <!-- Nose -->
            <rect x="24" y="28" width="4" height="3" fill="#ff9999"/>
            <!-- Whiskers -->
            <rect x="10" y="28" width="6" height="2" fill="#888888"/>
            <rect x="36" y="28" width="6" height="2" fill="#888888"/>
            <!-- Cheeks -->
            <rect x="14" y="28" width="4" height="4" fill="#ffcccc"/>
            <rect x="34" y="28" width="4" height="4" fill="#ffcccc"/>
        </svg>
    `,

    // FLICKERP - Glowing caterpillar (Bug type) (64x64)
    flickerp: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Glow effect -->
            <ellipse cx="32" cy="42" rx="20" ry="12" fill="rgba(144,238,144,0.2)"/>
            <!-- Tail segment -->
            <rect x="48" y="38" width="10" height="12" fill="#7cb342"/>
            <rect x="50" y="40" width="6" height="8" fill="#9ccc65"/>
            <!-- Body segments -->
            <rect x="36" y="36" width="14" height="16" fill="#8bc34a"/>
            <rect x="38" y="38" width="10" height="12" fill="#aed581"/>
            <rect x="24" y="34" width="14" height="18" fill="#7cb342"/>
            <rect x="26" y="36" width="10" height="14" fill="#9ccc65"/>
            <rect x="12" y="36" width="14" height="16" fill="#8bc34a"/>
            <rect x="14" y="38" width="10" height="12" fill="#aed581"/>
            <!-- Glowing spots -->
            <rect x="40" y="42" width="4" height="4" fill="#ffff00"/>
            <rect x="28" y="40" width="4" height="4" fill="#ffff00"/>
            <rect x="16" y="42" width="4" height="4" fill="#ffff00"/>
            <!-- Head -->
            <rect x="4" y="32" width="12" height="16" fill="#8bc34a"/>
            <rect x="2" y="36" width="4" height="10" fill="#8bc34a"/>
            <!-- Eyes -->
            <rect x="4" y="36" width="6" height="6" fill="#222222"/>
            <rect x="5" y="37" width="2" height="2" fill="#ffffff"/>
            <!-- Antennae -->
            <rect x="6" y="26" width="2" height="8" fill="#7cb342"/>
            <rect x="12" y="26" width="2" height="8" fill="#7cb342"/>
            <rect x="5" y="24" width="4" height="4" fill="#ffff00"/>
            <rect x="11" y="24" width="4" height="4" fill="#ffff00"/>
            <!-- Legs -->
            <rect x="14" y="50" width="3" height="6" fill="#689f38"/>
            <rect x="26" y="50" width="3" height="6" fill="#689f38"/>
            <rect x="38" y="50" width="3" height="6" fill="#689f38"/>
            <rect x="48" y="50" width="3" height="6" fill="#689f38"/>
        </svg>
    `,

    // PEBBLUNK - Rock creature (Rock type) (64x64)
    pebblunk: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.3)"/>
            <!-- Body (main rock) -->
            <rect x="12" y="20" width="40" height="36" fill="#8d8d8d"/>
            <rect x="16" y="16" width="32" height="8" fill="#9e9e9e"/>
            <rect x="8" y="28" width="8" height="24" fill="#757575"/>
            <rect x="48" y="28" width="8" height="24" fill="#757575"/>
            <!-- Rock texture -->
            <rect x="18" y="24" width="6" height="6" fill="#757575"/>
            <rect x="32" y="28" width="8" height="8" fill="#616161"/>
            <rect x="42" y="36" width="6" height="6" fill="#9e9e9e"/>
            <rect x="14" y="40" width="8" height="6" fill="#616161"/>
            <rect x="26" y="44" width="10" height="6" fill="#9e9e9e"/>
            <!-- Eyes -->
            <rect x="20" y="30" width="8" height="8" fill="#ffffff"/>
            <rect x="36" y="30" width="8" height="8" fill="#ffffff"/>
            <rect x="22" y="32" width="4" height="4" fill="#222222"/>
            <rect x="38" y="32" width="4" height="4" fill="#222222"/>
            <!-- Mouth -->
            <rect x="26" y="44" width="12" height="4" fill="#424242"/>
            <!-- Arms (rock protrusions) -->
            <rect x="4" y="34" width="8" height="10" fill="#757575"/>
            <rect x="52" y="34" width="8" height="10" fill="#757575"/>
            <!-- Feet -->
            <rect x="16" y="52" width="10" height="6" fill="#616161"/>
            <rect x="38" y="52" width="10" height="6" fill="#616161"/>
            <!-- Cracks -->
            <rect x="30" y="20" width="2" height="8" fill="#424242"/>
            <rect x="24" y="22" width="8" height="2" fill="#424242"/>
        </svg>
    `,

    // ZAPPUP - Electric puppy (Electric type) (64x64)
    zappup: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="58" rx="14" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Tail (lightning bolt shape) -->
            <rect x="46" y="30" width="6" height="8" fill="#ffd54f"/>
            <rect x="50" y="26" width="6" height="8" fill="#ffeb3b"/>
            <rect x="54" y="30" width="6" height="6" fill="#ffd54f"/>
            <rect x="58" y="26" width="4" height="8" fill="#ffeb3b"/>
            <!-- Body -->
            <rect x="22" y="30" width="26" height="18" fill="#ffd54f"/>
            <rect x="20" y="34" width="4" height="12" fill="#ffd54f"/>
            <!-- Belly -->
            <rect x="26" y="38" width="18" height="10" fill="#fff9c4"/>
            <!-- Electric pattern -->
            <rect x="36" y="32" width="8" height="2" fill="#ffeb3b"/>
            <rect x="40" y="34" width="2" height="6" fill="#ffeb3b"/>
            <!-- Back legs -->
            <rect x="38" y="46" width="6" height="10" fill="#ffd54f"/>
            <rect x="36" y="52" width="10" height="4" fill="#ffd54f"/>
            <!-- Front legs -->
            <rect x="22" y="44" width="6" height="10" fill="#ffd54f"/>
            <rect x="20" y="50" width="10" height="4" fill="#ffd54f"/>
            <!-- Paws -->
            <rect x="20" y="52" width="4" height="4" fill="#ffb300"/>
            <rect x="26" y="52" width="4" height="4" fill="#ffb300"/>
            <rect x="36" y="52" width="4" height="4" fill="#ffb300"/>
            <rect x="42" y="52" width="4" height="4" fill="#ffb300"/>
            <!-- Head -->
            <rect x="10" y="14" width="22" height="20" fill="#ffd54f"/>
            <rect x="8" y="18" width="4" height="14" fill="#ffd54f"/>
            <!-- Ears (pointed) -->
            <rect x="10" y="4" width="6" height="14" fill="#ffd54f"/>
            <rect x="24" y="4" width="6" height="14" fill="#ffd54f"/>
            <rect x="12" y="6" width="3" height="8" fill="#ffeb3b"/>
            <rect x="25" y="6" width="3" height="8" fill="#ffeb3b"/>
            <!-- Face -->
            <rect x="14" y="24" width="12" height="8" fill="#fff9c4"/>
            <!-- Eyes -->
            <rect x="12" y="18" width="6" height="6" fill="#222222"/>
            <rect x="22" y="18" width="6" height="6" fill="#222222"/>
            <rect x="13" y="19" width="2" height="2" fill="#ffffff"/>
            <rect x="23" y="19" width="2" height="2" fill="#ffffff"/>
            <!-- Nose -->
            <rect x="18" y="26" width="4" height="3" fill="#222222"/>
            <!-- Cheeks (electric) -->
            <rect x="8" y="24" width="4" height="4" fill="#ff9800"/>
            <rect x="28" y="24" width="4" height="4" fill="#ff9800"/>
            <!-- Sparks -->
            <rect x="4" y="22" width="2" height="4" fill="#ffeb3b"/>
            <rect x="34" y="22" width="2" height="4" fill="#ffeb3b"/>
        </svg>
    `,

    // SHROOMKIN - Mushroom creature (Grass type) (64x64)
    shroomkin: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Shadow -->
            <ellipse cx="32" cy="58" rx="14" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Mushroom cap -->
            <ellipse cx="32" cy="18" rx="22" ry="14" fill="#e57373"/>
            <rect x="10" y="16" width="44" height="10" fill="#e57373"/>
            <!-- Cap spots -->
            <ellipse cx="20" cy="14" rx="4" ry="3" fill="#ffcdd2"/>
            <ellipse cx="38" cy="12" rx="5" ry="3" fill="#ffcdd2"/>
            <ellipse cx="28" cy="20" rx="3" ry="2" fill="#ffcdd2"/>
            <ellipse cx="44" cy="18" rx="3" ry="2" fill="#ffcdd2"/>
            <!-- Cap underside -->
            <rect x="18" y="24" width="28" height="6" fill="#d4a574"/>
            <!-- Stem/Body -->
            <rect x="22" y="28" width="20" height="24" fill="#f5deb3"/>
            <rect x="20" y="32" width="4" height="18" fill="#f5deb3"/>
            <rect x="40" y="32" width="4" height="18" fill="#f5deb3"/>
            <!-- Belly -->
            <rect x="26" y="36" width="12" height="14" fill="#fff8e1"/>
            <!-- Eyes -->
            <rect x="24" y="34" width="6" height="6" fill="#222222"/>
            <rect x="34" y="34" width="6" height="6" fill="#222222"/>
            <rect x="25" y="35" width="2" height="2" fill="#ffffff"/>
            <rect x="35" y="35" width="2" height="2" fill="#ffffff"/>
            <!-- Mouth -->
            <rect x="28" y="44" width="8" height="3" fill="#222222"/>
            <rect x="30" y="45" width="4" height="2" fill="#e57373"/>
            <!-- Feet -->
            <rect x="20" y="50" width="10" height="6" fill="#d4a574"/>
            <rect x="34" y="50" width="10" height="6" fill="#d4a574"/>
            <!-- Arms (small) -->
            <rect x="14" y="36" width="8" height="6" fill="#f5deb3"/>
            <rect x="42" y="36" width="8" height="6" fill="#f5deb3"/>
            <!-- Blush -->
            <rect x="20" y="40" width="4" height="3" fill="#ffcccc"/>
            <rect x="40" y="40" width="4" height="3" fill="#ffcccc"/>
        </svg>
    `,

    // GLACIATIX - Ice legendary (64x64)
    glaciatix: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Ice crystal wings (back) -->
            <rect x="44" y="8" width="4" height="16" fill="#85c1e9"/>
            <rect x="48" y="4" width="4" height="20" fill="#aed6f1"/>
            <rect x="52" y="8" width="4" height="16" fill="#d4e6f1"/>
            <rect x="56" y="12" width="4" height="12" fill="#e8f6f3"/>
            <rect x="60" y="16" width="3" height="8" fill="#ffffff"/>

            <rect x="46" y="20" width="3" height="12" fill="#5dade2"/>
            <rect x="50" y="22" width="4" height="14" fill="#85c1e9"/>
            <rect x="54" y="26" width="3" height="10" fill="#aed6f1"/>

            <!-- Tail -->
            <rect x="48" y="38" width="8" height="6" fill="#2980b9"/>
            <rect x="54" y="36" width="6" height="8" fill="#3498db"/>
            <rect x="58" y="34" width="5" height="10" fill="#5dade2"/>

            <!-- Ice crystals on tail -->
            <rect x="60" y="32" width="3" height="4" fill="#aed6f1"/>
            <rect x="62" y="30" width="2" height="4" fill="#d4e6f1"/>
            <rect x="60" y="42" width="3" height="4" fill="#aed6f1"/>

            <!-- Body -->
            <rect x="18" y="24" width="32" height="22" fill="#2980b9"/>
            <rect x="16" y="28" width="6" height="16" fill="#2980b9"/>

            <!-- Ice armor plates -->
            <rect x="22" y="26" width="8" height="4" fill="#5dade2"/>
            <rect x="34" y="26" width="8" height="4" fill="#5dade2"/>
            <rect x="26" y="32" width="12" height="4" fill="#85c1e9"/>

            <!-- Belly -->
            <rect x="22" y="38" width="24" height="8" fill="#aed6f1"/>

            <!-- Back legs -->
            <rect x="38" y="44" width="8" height="14" fill="#2980b9"/>
            <rect x="36" y="54" width="12" height="6" fill="#2980b9"/>

            <!-- Front legs -->
            <rect x="18" y="42" width="8" height="14" fill="#2980b9"/>
            <rect x="16" y="52" width="12" height="6" fill="#2980b9"/>

            <!-- Ice claws -->
            <rect x="16" y="56" width="3" height="4" fill="#d4e6f1"/>
            <rect x="20" y="56" width="3" height="4" fill="#d4e6f1"/>
            <rect x="24" y="56" width="3" height="4" fill="#d4e6f1"/>
            <rect x="36" y="56" width="3" height="4" fill="#d4e6f1"/>
            <rect x="40" y="56" width="3" height="4" fill="#d4e6f1"/>
            <rect x="44" y="56" width="3" height="4" fill="#d4e6f1"/>

            <!-- Neck -->
            <rect x="10" y="16" width="12" height="16" fill="#2980b9"/>

            <!-- Head -->
            <rect x="2" y="6" width="18" height="18" fill="#2980b9"/>
            <rect x="0" y="10" width="4" height="12" fill="#2980b9"/>

            <!-- Ice crown -->
            <rect x="6" y="0" width="4" height="8" fill="#85c1e9"/>
            <rect x="10" y="2" width="4" height="6" fill="#aed6f1"/>
            <rect x="14" y="0" width="4" height="8" fill="#d4e6f1"/>
            <rect x="8" y="0" width="2" height="4" fill="#e8f6f3"/>
            <rect x="16" y="0" width="2" height="4" fill="#ffffff"/>

            <!-- Eyes -->
            <rect x="4" y="10" width="6" height="6" fill="#ffffff"/>
            <rect x="12" y="10" width="6" height="6" fill="#ffffff"/>
            <rect x="5" y="11" width="4" height="4" fill="#1a5276"/>
            <rect x="13" y="11" width="4" height="4" fill="#1a5276"/>
            <rect x="5" y="11" width="2" height="2" fill="#85c1e9"/>
            <rect x="13" y="11" width="2" height="2" fill="#85c1e9"/>

            <!-- Snout -->
            <rect x="0" y="18" width="8" height="6" fill="#3498db"/>
            <rect x="0" y="20" width="4" height="4" fill="#5dade2"/>

            <!-- Ice breath hint -->
            <rect x="0" y="22" width="2" height="2" fill="#d4e6f1"/>
        </svg>
    `,

    // BLAZARION - Fire legendary (64x64)
    blazarion: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <!-- Flame wings (back) -->
            <rect x="12" y="8" width="4" height="16" fill="#ff6600"/>
            <rect x="8" y="4" width="4" height="20" fill="#ff8800"/>
            <rect x="4" y="8" width="4" height="16" fill="#ffaa00"/>
            <rect x="0" y="12" width="4" height="12" fill="#ffcc00"/>
            <rect x="0" y="16" width="3" height="8" fill="#ffee66"/>

            <rect x="11" y="20" width="3" height="12" fill="#ff4400"/>
            <rect x="6" y="22" width="4" height="14" fill="#ff6600"/>
            <rect x="2" y="26" width="3" height="10" fill="#ff8800"/>

            <!-- Tail -->
            <rect x="4" y="38" width="8" height="6" fill="#cc3300"/>
            <rect x="0" y="36" width="6" height="8" fill="#dd4400"/>

            <!-- Tail flame -->
            <rect x="0" y="32" width="4" height="8" fill="#ff4400"/>
            <rect x="0" y="28" width="3" height="6" fill="#ff6600"/>
            <rect x="0" y="24" width="2" height="6" fill="#ffaa00"/>
            <rect x="0" y="40" width="3" height="6" fill="#ff6600"/>
            <rect x="0" y="44" width="2" height="4" fill="#ffcc00"/>

            <!-- Body -->
            <rect x="14" y="24" width="32" height="22" fill="#cc3300"/>
            <rect x="42" y="28" width="6" height="16" fill="#cc3300"/>

            <!-- Flame armor plates -->
            <rect x="34" y="26" width="8" height="4" fill="#ff5500"/>
            <rect x="22" y="26" width="8" height="4" fill="#ff5500"/>
            <rect x="26" y="32" width="12" height="4" fill="#ff7700"/>

            <!-- Belly -->
            <rect x="18" y="38" width="24" height="8" fill="#ffaa66"/>

            <!-- Back legs -->
            <rect x="18" y="44" width="8" height="14" fill="#cc3300"/>
            <rect x="16" y="54" width="12" height="6" fill="#cc3300"/>

            <!-- Front legs -->
            <rect x="38" y="42" width="8" height="14" fill="#cc3300"/>
            <rect x="36" y="52" width="12" height="6" fill="#cc3300"/>

            <!-- Fire claws -->
            <rect x="36" y="56" width="3" height="4" fill="#ffcc88"/>
            <rect x="40" y="56" width="3" height="4" fill="#ffcc88"/>
            <rect x="44" y="56" width="3" height="4" fill="#ffcc88"/>
            <rect x="16" y="56" width="3" height="4" fill="#ffcc88"/>
            <rect x="20" y="56" width="3" height="4" fill="#ffcc88"/>
            <rect x="24" y="56" width="3" height="4" fill="#ffcc88"/>

            <!-- Neck -->
            <rect x="42" y="16" width="12" height="16" fill="#cc3300"/>

            <!-- Head -->
            <rect x="44" y="6" width="18" height="18" fill="#cc3300"/>
            <rect x="60" y="10" width="4" height="12" fill="#cc3300"/>

            <!-- Flame crown -->
            <rect x="54" y="0" width="4" height="8" fill="#ff5500"/>
            <rect x="50" y="2" width="4" height="6" fill="#ff7700"/>
            <rect x="46" y="0" width="4" height="8" fill="#ffaa00"/>
            <rect x="56" y="0" width="2" height="4" fill="#ffcc00"/>
            <rect x="46" y="0" width="2" height="4" fill="#ffee66"/>

            <!-- Eyes -->
            <rect x="52" y="10" width="6" height="6" fill="#ffffff"/>
            <rect x="46" y="10" width="6" height="6" fill="#ffffff"/>
            <rect x="53" y="11" width="4" height="4" fill="#8b0000"/>
            <rect x="47" y="11" width="4" height="4" fill="#8b0000"/>
            <rect x="55" y="11" width="2" height="2" fill="#ff6600"/>
            <rect x="49" y="11" width="2" height="2" fill="#ff6600"/>

            <!-- Snout -->
            <rect x="56" y="18" width="8" height="6" fill="#dd4400"/>
            <rect x="60" y="20" width="4" height="4" fill="#ff5500"/>

            <!-- Fire breath hint -->
            <rect x="62" y="22" width="2" height="2" fill="#ffcc00"/>
        </svg>
    `,

    // EMBERPAW - Fire puppy (64x64)
    emberpaw: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="14" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Body -->
            <rect x="18" y="32" width="24" height="18" fill="#e25822"/>
            <rect x="20" y="36" width="20" height="10" fill="#f4a460"/>
            <!-- Head -->
            <rect x="34" y="18" width="20" height="18" fill="#e25822"/>
            <rect x="38" y="28" width="12" height="6" fill="#f4a460"/>
            <!-- Ears -->
            <rect x="36" y="10" width="6" height="10" fill="#e25822"/>
            <rect x="48" y="10" width="6" height="10" fill="#e25822"/>
            <rect x="38" y="12" width="2" height="6" fill="#ff6b35"/>
            <rect x="50" y="12" width="2" height="6" fill="#ff6b35"/>
            <!-- Eyes -->
            <rect x="38" y="22" width="5" height="5" fill="#fff"/>
            <rect x="46" y="22" width="5" height="5" fill="#fff"/>
            <rect x="40" y="23" width="3" height="3" fill="#222"/>
            <rect x="48" y="23" width="3" height="3" fill="#222"/>
            <!-- Nose -->
            <rect x="44" y="28" width="4" height="3" fill="#222"/>
            <!-- Tail flame -->
            <rect x="10" y="30" width="10" height="6" fill="#e25822"/>
            <rect x="6" y="28" width="6" height="8" fill="#ff6b35"/>
            <rect x="2" y="26" width="5" height="10" fill="#ff9500"/>
            <rect x="0" y="24" width="4" height="8" fill="#ffcc00"/>
            <!-- Legs -->
            <rect x="20" y="48" width="6" height="10" fill="#e25822"/>
            <rect x="34" y="48" width="6" height="10" fill="#e25822"/>
            <rect x="19" y="56" width="8" height="4" fill="#e25822"/>
            <rect x="33" y="56" width="8" height="4" fill="#e25822"/>
        </svg>
    `,

    // AQUAFIN - Water fish (64x64)
    aquafin: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Tail -->
            <rect x="2" y="24" width="12" height="16" fill="#1e90ff"/>
            <rect x="0" y="20" width="8" height="8" fill="#00bfff"/>
            <rect x="0" y="36" width="8" height="8" fill="#00bfff"/>
            <!-- Body -->
            <rect x="12" y="20" width="32" height="24" fill="#1e90ff"/>
            <rect x="16" y="28" width="24" height="12" fill="#87ceeb"/>
            <!-- Dorsal fin -->
            <rect x="24" y="10" width="10" height="12" fill="#1e90ff"/>
            <rect x="26" y="6" width="6" height="6" fill="#00bfff"/>
            <!-- Bottom fin -->
            <rect x="26" y="44" width="8" height="8" fill="#1e90ff"/>
            <!-- Head -->
            <rect x="42" y="22" width="16" height="20" fill="#1e90ff"/>
            <!-- Eye -->
            <rect x="48" y="26" width="8" height="8" fill="#fff"/>
            <rect x="50" y="28" width="4" height="4" fill="#222"/>
            <rect x="50" y="28" width="2" height="2" fill="#fff"/>
            <!-- Mouth -->
            <rect x="56" y="36" width="6" height="4" fill="#ff6b6b"/>
            <!-- Bubbles -->
            <rect x="58" y="20" width="3" height="3" fill="#e0ffff"/>
            <rect x="62" y="16" width="2" height="2" fill="#e0ffff"/>
            <!-- Scales pattern -->
            <rect x="20" y="24" width="4" height="4" fill="#00bfff"/>
            <rect x="28" y="24" width="4" height="4" fill="#00bfff"/>
            <rect x="36" y="24" width="4" height="4" fill="#00bfff"/>
        </svg>
    `,

    // THORNLING - Thorny grass creature (64x64)
    thornling: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="14" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Body -->
            <rect x="16" y="28" width="28" height="24" fill="#228b22"/>
            <rect x="20" y="36" width="20" height="12" fill="#32cd32"/>
            <!-- Thorns -->
            <rect x="12" y="30" width="4" height="8" fill="#006400"/>
            <rect x="10" y="32" width="4" height="4" fill="#8b4513"/>
            <rect x="44" y="30" width="4" height="8" fill="#006400"/>
            <rect x="46" y="32" width="4" height="4" fill="#8b4513"/>
            <rect x="26" y="20" width="4" height="10" fill="#006400"/>
            <rect x="27" y="16" width="3" height="6" fill="#8b4513"/>
            <rect x="34" y="22" width="4" height="8" fill="#006400"/>
            <rect x="35" y="18" width="3" height="6" fill="#8b4513"/>
            <!-- Head -->
            <rect x="22" y="30" width="16" height="14" fill="#228b22"/>
            <!-- Eyes -->
            <rect x="24" y="34" width="5" height="5" fill="#fff"/>
            <rect x="32" y="34" width="5" height="5" fill="#fff"/>
            <rect x="26" y="35" width="3" height="3" fill="#222"/>
            <rect x="34" y="35" width="3" height="3" fill="#222"/>
            <!-- Mouth -->
            <rect x="28" y="42" width="6" height="2" fill="#006400"/>
            <!-- Feet -->
            <rect x="18" y="50" width="8" height="8" fill="#228b22"/>
            <rect x="34" y="50" width="8" height="8" fill="#228b22"/>
            <rect x="16" y="56" width="6" height="4" fill="#8b4513"/>
            <rect x="38" y="56" width="6" height="4" fill="#8b4513"/>
        </svg>
    `,

    // SPARKIT - Electric rodent (64x64)
    sparkit: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="12" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Body -->
            <rect x="20" y="32" width="20" height="18" fill="#ffd700"/>
            <rect x="24" y="38" width="12" height="10" fill="#fff8dc"/>
            <!-- Head -->
            <rect x="18" y="18" width="24" height="18" fill="#ffd700"/>
            <!-- Ears -->
            <rect x="14" y="8" width="8" height="14" fill="#ffd700"/>
            <rect x="38" y="8" width="8" height="14" fill="#ffd700"/>
            <rect x="16" y="10" width="4" height="8" fill="#222"/>
            <rect x="40" y="10" width="4" height="8" fill="#222"/>
            <!-- Cheeks -->
            <rect x="14" y="26" width="6" height="6" fill="#ff6347"/>
            <rect x="40" y="26" width="6" height="6" fill="#ff6347"/>
            <!-- Eyes -->
            <rect x="22" y="22" width="6" height="6" fill="#fff"/>
            <rect x="32" y="22" width="6" height="6" fill="#fff"/>
            <rect x="24" y="24" width="3" height="3" fill="#222"/>
            <rect x="34" y="24" width="3" height="3" fill="#222"/>
            <!-- Nose -->
            <rect x="28" y="30" width="4" height="3" fill="#222"/>
            <!-- Lightning bolt tail -->
            <rect x="40" y="36" width="8" height="6" fill="#ffd700"/>
            <rect x="46" y="32" width="8" height="6" fill="#ffd700"/>
            <rect x="52" y="28" width="8" height="6" fill="#ffd700"/>
            <rect x="56" y="24" width="6" height="6" fill="#ffd700"/>
            <!-- Feet -->
            <rect x="22" y="48" width="6" height="10" fill="#ffd700"/>
            <rect x="32" y="48" width="6" height="10" fill="#ffd700"/>
        </svg>
    `,

    // CAVELING - Cave rock creature (64x64)
    caveling: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="16" ry="4" fill="rgba(0,0,0,0.2)"/>
            <!-- Body -->
            <rect x="14" y="24" width="32" height="28" fill="#696969"/>
            <rect x="18" y="28" width="24" height="20" fill="#808080"/>
            <!-- Rock texture -->
            <rect x="20" y="32" width="6" height="6" fill="#a9a9a9"/>
            <rect x="32" y="36" width="8" height="6" fill="#a9a9a9"/>
            <rect x="24" y="42" width="6" height="4" fill="#a9a9a9"/>
            <!-- Head -->
            <rect x="18" y="14" width="24" height="16" fill="#696969"/>
            <!-- Eyes (glowing) -->
            <rect x="22" y="20" width="6" height="6" fill="#00ffff"/>
            <rect x="32" y="20" width="6" height="6" fill="#00ffff"/>
            <rect x="24" y="22" width="2" height="2" fill="#fff"/>
            <rect x="34" y="22" width="2" height="2" fill="#fff"/>
            <!-- Crystals on head -->
            <rect x="26" y="6" width="4" height="10" fill="#4169e1"/>
            <rect x="32" y="8" width="4" height="8" fill="#6495ed"/>
            <rect x="20" y="10" width="3" height="6" fill="#4169e1"/>
            <!-- Arms -->
            <rect x="8" y="30" width="8" height="14" fill="#696969"/>
            <rect x="44" y="30" width="8" height="14" fill="#696969"/>
            <!-- Feet -->
            <rect x="18" y="50" width="10" height="8" fill="#696969"/>
            <rect x="32" y="50" width="10" height="8" fill="#696969"/>
        </svg>
    `,

    // MOTHLING - Moth bug (64x64)
    mothling: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="10" ry="2" fill="rgba(0,0,0,0.2)"/>
            <!-- Wings -->
            <rect x="4" y="20" width="20" height="24" fill="#dda0dd"/>
            <rect x="40" y="20" width="20" height="24" fill="#dda0dd"/>
            <rect x="8" y="24" width="12" height="16" fill="#ee82ee"/>
            <rect x="44" y="24" width="12" height="16" fill="#ee82ee"/>
            <!-- Wing patterns -->
            <rect x="10" y="28" width="6" height="6" fill="#9932cc"/>
            <rect x="48" y="28" width="6" height="6" fill="#9932cc"/>
            <rect x="12" y="36" width="4" height="4" fill="#4b0082"/>
            <rect x="48" y="36" width="4" height="4" fill="#4b0082"/>
            <!-- Body -->
            <rect x="26" y="18" width="12" height="32" fill="#d8bfd8"/>
            <rect x="28" y="22" width="8" height="24" fill="#dda0dd"/>
            <!-- Head -->
            <rect x="24" y="10" width="16" height="12" fill="#d8bfd8"/>
            <!-- Antennae -->
            <rect x="26" y="2" width="3" height="10" fill="#8b4513"/>
            <rect x="35" y="2" width="3" height="10" fill="#8b4513"/>
            <rect x="24" y="0" width="4" height="4" fill="#ffd700"/>
            <rect x="36" y="0" width="4" height="4" fill="#ffd700"/>
            <!-- Eyes -->
            <rect x="26" y="14" width="5" height="5" fill="#ff0000"/>
            <rect x="33" y="14" width="5" height="5" fill="#ff0000"/>
            <rect x="27" y="15" width="2" height="2" fill="#fff"/>
            <rect x="34" y="15" width="2" height="2" fill="#fff"/>
            <!-- Feet -->
            <rect x="28" y="50" width="3" height="8" fill="#8b4513"/>
            <rect x="33" y="50" width="3" height="8" fill="#8b4513"/>
        </svg>
    `,

    // GUSTWING - Wind bird (64x64)
    gustwing: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="8" ry="2" fill="rgba(0,0,0,0.2)"/>
            <!-- Wings spread -->
            <rect x="2" y="24" width="20" height="12" fill="#87ceeb"/>
            <rect x="42" y="24" width="20" height="12" fill="#87ceeb"/>
            <rect x="0" y="28" width="8" height="6" fill="#b0e0e6"/>
            <rect x="56" y="28" width="8" height="6" fill="#b0e0e6"/>
            <rect x="6" y="22" width="12" height="4" fill="#add8e6"/>
            <rect x="46" y="22" width="12" height="4" fill="#add8e6"/>
            <!-- Body -->
            <rect x="22" y="22" width="20" height="20" fill="#87ceeb"/>
            <rect x="26" y="28" width="12" height="10" fill="#e0ffff"/>
            <!-- Head -->
            <rect x="26" y="10" width="16" height="14" fill="#87ceeb"/>
            <!-- Crest -->
            <rect x="30" y="4" width="4" height="8" fill="#4169e1"/>
            <rect x="34" y="6" width="4" height="6" fill="#6495ed"/>
            <!-- Eyes -->
            <rect x="28" y="14" width="5" height="5" fill="#fff"/>
            <rect x="36" y="14" width="5" height="5" fill="#fff"/>
            <rect x="30" y="15" width="3" height="3" fill="#222"/>
            <rect x="37" y="15" width="3" height="3" fill="#222"/>
            <!-- Beak -->
            <rect x="32" y="20" width="6" height="4" fill="#ffa500"/>
            <rect x="36" y="22" width="4" height="2" fill="#ff8c00"/>
            <!-- Tail feathers -->
            <rect x="28" y="42" width="8" height="12" fill="#87ceeb"/>
            <rect x="24" y="46" width="6" height="10" fill="#add8e6"/>
            <rect x="34" y="46" width="6" height="10" fill="#add8e6"/>
            <!-- Feet -->
            <rect x="28" y="52" width="3" height="6" fill="#ffa500"/>
            <rect x="33" y="52" width="3" height="6" fill="#ffa500"/>
        </svg>
    `,

    // FUZZBALL - Fluffy normal type (64x64)
    fuzzball: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="14" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Fluffy body -->
            <rect x="12" y="20" width="40" height="34" fill="#f5deb3"/>
            <rect x="8" y="26" width="8" height="22" fill="#ffe4c4"/>
            <rect x="48" y="26" width="8" height="22" fill="#ffe4c4"/>
            <rect x="16" y="16" width="32" height="8" fill="#ffe4c4"/>
            <rect x="16" y="50" width="32" height="6" fill="#ffe4c4"/>
            <!-- Fluff texture -->
            <rect x="18" y="24" width="6" height="6" fill="#fffacd"/>
            <rect x="30" y="22" width="8" height="6" fill="#fffacd"/>
            <rect x="40" y="28" width="6" height="6" fill="#fffacd"/>
            <rect x="22" y="38" width="8" height="6" fill="#fffacd"/>
            <rect x="36" y="40" width="6" height="6" fill="#fffacd"/>
            <!-- Face -->
            <rect x="22" y="30" width="20" height="16" fill="#ffdab9"/>
            <!-- Eyes -->
            <rect x="24" y="34" width="6" height="6" fill="#222"/>
            <rect x="34" y="34" width="6" height="6" fill="#222"/>
            <rect x="26" y="35" width="2" height="2" fill="#fff"/>
            <rect x="36" y="35" width="2" height="2" fill="#fff"/>
            <!-- Nose -->
            <rect x="30" y="40" width="4" height="3" fill="#ffc0cb"/>
            <!-- Mouth -->
            <rect x="28" y="44" width="8" height="2" fill="#deb887"/>
            <!-- Tiny feet -->
            <rect x="22" y="54" width="6" height="4" fill="#deb887"/>
            <rect x="36" y="54" width="6" height="4" fill="#deb887"/>
        </svg>
    `,

    // CRYSTIP - Crystal rock type (64x64)
    crystip: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="60" rx="12" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Crystal body -->
            <rect x="20" y="28" width="24" height="26" fill="#e6e6fa"/>
            <rect x="24" y="32" width="16" height="18" fill="#dcd0ff"/>
            <!-- Crystal spikes -->
            <rect x="18" y="16" width="8" height="16" fill="#9370db"/>
            <rect x="20" y="10" width="4" height="8" fill="#ba55d3"/>
            <rect x="38" y="18" width="8" height="14" fill="#9370db"/>
            <rect x="40" y="12" width="4" height="8" fill="#ba55d3"/>
            <rect x="28" y="8" width="8" height="22" fill="#8a2be2"/>
            <rect x="30" y="2" width="4" height="8" fill="#9932cc"/>
            <!-- Facets/shine -->
            <rect x="30" y="14" width="2" height="4" fill="#fff"/>
            <rect x="22" y="20" width="2" height="3" fill="#fff"/>
            <rect x="40" y="22" width="2" height="3" fill="#fff"/>
            <!-- Eyes -->
            <rect x="26" y="36" width="5" height="5" fill="#fff"/>
            <rect x="35" y="36" width="5" height="5" fill="#fff"/>
            <rect x="27" y="37" width="3" height="3" fill="#4b0082"/>
            <rect x="36" y="37" width="3" height="3" fill="#4b0082"/>
            <!-- Base/feet -->
            <rect x="18" y="52" width="28" height="6" fill="#9370db"/>
            <rect x="22" y="56" width="8" height="4" fill="#8a2be2"/>
            <rect x="34" y="56" width="8" height="4" fill="#8a2be2"/>
        </svg>
    `,

    // VOLTEEL - Electric eel (64x64)
    volteel: `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
            <ellipse cx="32" cy="58" rx="18" ry="3" fill="rgba(0,0,0,0.2)"/>
            <!-- Tail -->
            <rect x="0" y="36" width="12" height="10" fill="#4169e1"/>
            <rect x="0" y="38" width="6" height="6" fill="#1e90ff"/>
            <!-- Body curves -->
            <rect x="10" y="32" width="14" height="14" fill="#4169e1"/>
            <rect x="22" y="28" width="12" height="18" fill="#4169e1"/>
            <rect x="32" y="24" width="14" height="22" fill="#4169e1"/>
            <!-- Electric patterns -->
            <rect x="14" y="36" width="6" height="4" fill="#ffff00"/>
            <rect x="26" y="34" width="4" height="6" fill="#ffff00"/>
            <rect x="36" y="30" width="6" height="4" fill="#ffff00"/>
            <!-- Belly -->
            <rect x="12" y="42" width="10" height="4" fill="#87ceeb"/>
            <rect x="24" y="40" width="10" height="6" fill="#87ceeb"/>
            <rect x="34" y="38" width="10" height="8" fill="#87ceeb"/>
            <!-- Head -->
            <rect x="44" y="26" width="16" height="18" fill="#4169e1"/>
            <rect x="56" y="30" width="6" height="10" fill="#4169e1"/>
            <!-- Eyes -->
            <rect x="48" y="30" width="6" height="6" fill="#fff"/>
            <rect x="50" y="32" width="3" height="3" fill="#222"/>
            <rect x="50" y="32" width="1" height="1" fill="#ffff00"/>
            <!-- Electric sparks -->
            <rect x="58" y="26" width="4" height="3" fill="#ffff00"/>
            <rect x="60" y="22" width="3" height="4" fill="#ffff00"/>
            <rect x="56" y="44" width="4" height="3" fill="#ffff00"/>
            <!-- Fins -->
            <rect x="46" y="20" width="8" height="8" fill="#1e90ff"/>
            <rect x="48" y="16" width="4" height="6" fill="#00bfff"/>
            <rect x="36" y="20" width="6" height="6" fill="#1e90ff"/>
        </svg>
    `
};

// Function to get sprite HTML
function getSprite(pokemonId) {
    return SPRITES[pokemonId] || SPRITES['ignewt'];
}

// Export for use
if (typeof module !== 'undefined') {
    module.exports = { SPRITES, getSprite };
}
