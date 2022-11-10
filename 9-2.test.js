const calculateBonus = require("./9-2");
describe("Testing bonus", () => {
    it("Суммирование целых чисел", () => {
        expect(calculateBonus(10,20)).toBe(30);
        expect(calculateBonus(100,300)).toBe(50);
        expect(calculateBonus(60,20)).toBe(50);
        expect(calculateBonus(0,0)).toBe(0);
        expect(calculateBonus(-1,-3)).toBe(-4);
    });
    it("Суммирование чисел с точкой и отрицательных чисел", () => {
        expect(calculateBonus(10.7,20)).toBe(30.7); //не упал чисто случайно (тесты с числами с плавающей точкой методом .toBeCloseTo) (:
        expect(calculateBonus(0.1,0.2)).toBeCloseTo(0.3); //expect(calculateBonurom(0.1,0.2)).toBe(0.3); - упадёт
        expect(calculateBonus(-100,-300)).toBe(-400);
    });
    it("Сравнение", () => {
        expect(calculateBonus(10,20)).toBeGreaterThan(0); //Быть больше чем 0. Бонус начисляется
        expect(calculateBonus(10,20)).toBeGreaterThanOrEqual(30);
        expect(calculateBonus(40,20)).toBeLessThan(51); //Быть меньше чем 50
        expect(calculateBonus(40,20)).toBeLessThanOrEqual(50); //Быть меньше чем или равным 50

    });
}
);

