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
