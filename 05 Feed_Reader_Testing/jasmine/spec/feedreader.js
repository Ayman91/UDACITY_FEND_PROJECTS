/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {
   "use strict";
   //"RSS Feeds" test suite
    describe('RSS Feeds', function() {
        // check allFeeds variable has been defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // check allFeeds object has a URL defined and URL is not empty.
        it('url empty test', function() {
            for(let i =0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();
            }
        });

        // check allFeeds object has a name defined and that the name is not empty.
        it('names defined' , function() {
            for(let i = 0; i  < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    //"The menu" test suite
    describe('The menu', function() {

        //check the visiblity of the menu
        it('check menu visibility', function() {
            expect(document.body.classList).toContain("menu-hidden");
        });
        //check the visiblity of the menu when it clicked
        it('check menu toggle', function() {
            $('.menu-icon-link').click();
            expect(document.body.classList).not.toContain('menu-hidden');
            $('.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
            });
        });
    //"Initial Entries" test suite
    describe ('Initial Entries', function() {
        // check the loadfead test suite
        beforeEach (function (done) {

            loadFeed (0, function () {
                done();
            })
        })
        it('more than entry', function() {
            expect($('.entry .feed').length).not.toBeLessThan(0);
        });
    })
    // "New Feed Selection" test suite
    describe('new feed selection', function() {
        // check when a new feed is loaded.
        let oldfeeds, newfeeds;
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldfeeds = $('.feed').html();

            loadFeed(1, function () {
                newfeeds = $('.feed').html();
                done();
                })
            })
        });
        //check new feed is loaded
        it('new feed is loaded', function(done) {
            expect(oldfeeds != newfeeds).toBe(true);

        });
    })
}())