#Present given folder structure in Tree:
let input = [
{
name: "public",
id: 1,
parent_id: 0
},
{
name: "src",
id: 2,
parent_id: 0
},
{
name: "app",
id: 3,
parent_id: 2
},
{
name: "dist",
id: 4,
parent_id: 0
},
{
name: "prod",
id: 5,
parent_id: 4
},
{
name: "prod-pub",
id: 6,
parent_id: 5
},
{
name: "utils.js",
id: 8,
parent_id: 5
}]
create a mail box side bar , side bar can have multiple sections based on backend config
each section opens a set of mails
under each section you can create a subsection by cliking the + icon on the section
--a-- +
--b-- +
--c-- -
--subc--
