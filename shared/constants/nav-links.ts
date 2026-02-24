export const NAV_LINKS = [
    { name: "Home", href: "/", number: "01" },
    { name: "About Us", href: "/about", number: "02" },
    {
        name: "Teams & Careers",
        href: "/careers",
        number: "03",
        sublinks: [
            { name: "Team", href: "/about#team" },
            { name: "Careers", href: "/careers" }
        ]
    },
    { name: "Partners", href: "/#partners", number: "04" },
    { name: "Contact Us", href: "/contact", number: "05" },
];
