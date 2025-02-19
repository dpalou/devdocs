/**
 * Copyright (c) Moodle Pty Ltd.
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
 */
const courseList = {
    siteHome: 'https://moodle.academy/',
    courses: {
        // Each course has a local name to make it easier to map within the documentation.
        // Please do not remove a name from the list, but instead mark it as archived.
        setup: {
            // Valid values are:
            // - id (int)
            // - name (string)
            // - summary (string)
            // - tags (string[])
            // - archived (bool)
            id: 29,
            name: 'Set up your Moodle Development Environment',
            summary: 'Learn about the Moodle developer community and setting up a development environment',
            description: 'This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.',
            tags: [
                'development',
                'basics',
                'setup',
            ],
            archived: false,
            series: [],
        },
        securityEssentials: {
            id: 53,
            name: 'Moodle Access and Security Essentials',
            summary: 'A short course looking at access control and security aspects of plugins.',
            description: 'In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle’s Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.',
            tags: [
                'development',
                'basic',
                'essentials',
                'security',
                'api',
            ],
            archived: false,
            series: [
                'basics',
            ],
        },
        outputEssentials: {
            id: 49,
            name: 'Web Output Essentials',
            summary: "Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",
            description: "This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",
            tags: [
                'development',
                'basics',
                'essentials',
                'output',
                'api',
            ],
            archived: false,
            series: [
                'basics',
            ],
        },
        architecture: {
            id: 51,
            name: "Moodle's Modular Architecture and APIs",
            summary: "Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",
            description: "In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",
            tags: [
                'development',
                'api',
                'architecture',
            ],
            archived: false,
            series: [
                'basics',
            ],
        },
        pluginBasics: {
            id: 10,
            name: 'Moodle Plugin Development Basics',
            summary: "Learn about the essential concepts in Moodle's moduel architecture.",
            description: "This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",
            tags: [
                'development',
                'basics',
                'essentials',
                'api',
                'plugins',
                'architecture',
            ],
            archived: false,
            series: [
                'basics',
            ],
        },
    },
};

module.exports = courseList;
