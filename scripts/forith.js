const hailWeapon = extend(Weapon, {
    name: "hail",
    x: 0,
    y: 0,
    rotate: true,
    rotateSpeed: 5,
    reload: 60,
    targetAir: false,
    range: 235,
    recoil: 2,
    inaccuracy: 1,
    shootCone: 10,
    shootSound: Sounds.bang
});

const forith = extend(UnitType, "forith", {
    health: 650,
    armor: 4.6,
    flying: true,
    speed: 0.7,
    accel: 0.04,
    drag: 0.014,
    hitSize: 20,
    lowAltitude: true,
    forceMultiTarget: true,
    range: 230,
    region: Core.atlas.find("fortress-outline"),
    cellRegion: Core.atlas.find("fortress-cell")
});

forith.weapons.add(
    UnitTypes.zenith.weapons.get(0),
    UnitTypes.zenith.weapons.get(1),
    hailWeapon
);