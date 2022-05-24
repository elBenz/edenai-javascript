/*
 * Eden AI API Documentation
 * <a href=\"https://app.edenai.run/user/login\" target=\"_blank\"><img src=\"/static/images/welcome.png\"></a>. # Welcome  Eden AI simplifies the use and integration of AI technologies by providing a unique API connected to the best AI engines and combined with a powerful management platform. The platform covers a wide range of AI technologies: * Vision:  <a href=\"https://www.edenai.co/vision\" target=\"_blank\">www.edenai.co/vision</a>. * Text & NLP: <a href=\"https://www.edenai.co/text\" target=\"_blank\">www.edenai.co/text</a>. * Speech & Audio: <a href=\"https://www.edenai.co/speech\" target=\"_blank\">www.edenai.co/speech</a>. * OCR: <a href=\"https://www.edenai.co/ocr\" target=\"_blank\">www.edenai.co/ocr</a>. * Machine Translation: <a href=\"https://www.edenai.co/translation\" target=\"_blank\">www.edenai.co/translation</a>. * Prediction: <a href=\"https://www.edenai.co/prediction\" target=\"_blank\">www.edenai.co/prediction</a>.  For all the proposed technologies, we provide a single endpoint:  the service provider is only a parameter that can be changed very easily. All the engines available on Eden AI are listed here: www.edenai.co/catalog  # Support & community  ### 1- Support If you have any problems, please contact us at this email address: contact@edenai.co. We will be happy to help you in the use of Eden AI.   ### 2- Community  You can interact personally with other people actively using and working with Eden AI and join our  <a href=\"https://join.slack.com/t/edenai/shared_invite/zt-t68c2pr9-4lDKQ_qEqmLiWNptQzB_6w\" target=\"_blank\">Slack community</a>.  We are always updating our docs, so a good way to always stay up to date is to watch our documentation repo on Github: <a href=\"https://github.com/edenai\" target=\"_blank\">https://github.com/edenai</a>.  ### 3- Blog  We also regularly publish various articles with Eden AI news and technical articles on the different AI engines that exist. You can find these articles here: <a href=\"https://www.edenai.co/blog\" target=\"_blank\">https://www.edenai.co/blog</a>.   # Authentication  ## Create account ![Register](/static/images/register.png)  To create an account, please go to this link: <a href=\"https://app.edenai.run/user/login\" target=\"_blank\">app.edenai.run/user/login</a>. You can create an account with your email address or by using your account on available platforms (Gmail, Github, etc.).   By creating an account with your email address, you will receive a confirmation email with a link to click. Check your spam if needed and contact us if you have any problem: contact@edenai.co  ![Login](/static/images/login.png) ## API key  By going to your account page on the platform: <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">https://app.edenai.run/admin/account</a>, you will have access to your API key to start using the different AI engines offered by Eden AI.   ![api_key](/static/images/api_key.png)  ## Sandbox API key  By going to your account page on the platform: <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">https://app.edenai.run/admin/account</a>, you will also have access to your **Sandbox** API key that will allow you to make free calls and get dummy responses in order to implement and debug Eden AI without consuming credits.   ![api_key](/static/images/sandbox_api_key.png)  # Portal Guide  Eden AI provides a web portal that allows you to do several tasks:  ![portal](/static/images/portal.png)  ### 1- Benchmark and test The platform allows you to easily compare competing engines without having to code. By uploading your data, you have access to the prediction results of the different engines. This gives you a first overview of the performance of AI engines.   ![benchmark](/static/images/benchmark.png)  ### 2- Cost management The <a href=\"https://app.edenai.run/admin/cost-management\" target=\"_blank\">cost management page</a> also allows you to centralize the costs associated with the different engines with various filters to simplify the analysis.   This page also allows you to define monthly budget limits not to be exceeded to secure the use of different AI engines.   ![cost-management](/static/images/cost_management.png) ### 3- Account The <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">account page</a> allows you to change your information and password. It also gives you access to your API key that you can renew if needed.   This page also allows you to add a credit card and to buy with credits to use all the engines offered by Eden AI.   ![account](/static/images/account.png)   # API Guide  Eden AI API has different endpoints that refer to different AI services. The connected providers are thus parameters that the user can easily change. 
 *
 * OpenAPI spec version: v1
 * Contact: contact@edenai.co
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Edenai);
  }
}(this, function(expect, Edenai) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Edenai.OCRApi();
  });

  describe('(package)', function() {
    describe('OCRApi', function() {
      describe('asyncOcrTablesJobIds', function() {
        it('should call asyncOcrTablesJobIds successfully', function(done) {
          // TODO: uncomment asyncOcrTablesJobIds call and complete the assertions
          /*

          instance.asyncOcrTablesJobIds(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Edenai.InlineResponse2001);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Edenai.InlineResponse2001Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.solutionName).to.be("");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.error).to.be.a('string');
                expect(data.error).to.be("");
                expect(data.originalResult).to.be.a(Object);
                expect(data.originalResult).to.be();
                {
                  let dataCtr = data.result;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Edenai.InlineResponse2001Result);
                    expect(data.jobId).to.be.a('string');
                    expect(data.jobId).to.be("");
                    expect(data.status).to.be.a('string');
                    expect(data.status).to.be("");
                    expect(data.created).to.be.a('string');
                    expect(data.created).to.be("");
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('asyncOcrTablesLaunch', function() {
        it('should call asyncOcrTablesLaunch successfully', function(done) {
          // TODO: uncomment, update parameter values for asyncOcrTablesLaunch call and complete the assertions
          /*
          var language = "language_example";
          var files = "/path/to/file.txt";
          var providers = "providers_example";
          var opts = {};
          opts.webhookReceiver = "webhookReceiver_example";
          opts.usersWebhookParameters = "usersWebhookParameters_example";
          opts.showOriginalResponses = false;

          instance.asyncOcrTablesLaunch(language, files, providers, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Edenai.InlineResponse204);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Edenai.InlineResponse204Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.solutionName).to.be("");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.error).to.be.a('string');
                expect(data.error).to.be("");
                expect(data.originalResult).to.be.a(Object);
                expect(data.originalResult).to.be();
                expect(data.result).to.be.a(Edenai.InlineResponse204Result);
                      expect(data.result.jobId).to.be.a('string');
                  expect(data.result.jobId).to.be("");
                  expect(data.result.status).to.be.a('string');
                  expect(data.result.status).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('asyncOcrTablesResults', function() {
        it('should call asyncOcrTablesResults successfully', function(done) {
          // TODO: uncomment, update parameter values for asyncOcrTablesResults call and complete the assertions
          /*
          var publicId = "publicId_example";

          instance.asyncOcrTablesResults(publicId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Edenai.InlineResponse2002);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Edenai.InlineResponse2002Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.solutionName).to.be("");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.error).to.be.a('string');
                expect(data.error).to.be("");
                expect(data.originalResult).to.be.a(Object);
                expect(data.originalResult).to.be();
                {
                  let dataCtr = data.result;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Edenai.InlineResponse2002Result);
                    expect(data.numberOfPages).to.be.a('number');
                    expect(data.numberOfPages).to.be();
                    {
                      let dataCtr = data.pages;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Edenai.InlineResponse2002Pages);
                        {
                          let dataCtr = data.tables;
                          expect(dataCtr).to.be.an(Array);
                          expect(dataCtr).to.not.be.empty();
                          for (let p in dataCtr) {
                            let data = dataCtr[p];
                            expect(data).to.be.a(Edenai.InlineResponse2002Tables);
                            {
                              let dataCtr = data.rows;
                              expect(dataCtr).to.be.an(Array);
                              expect(dataCtr).to.not.be.empty();
                              for (let p in dataCtr) {
                                let data = dataCtr[p];
                                expect(data).to.be.a(Edenai.InlineResponse2002Rows);
                                expect(data.isHeader).to.be.a('boolean');
                                expect(data.isHeader).to.be(false);
                                {
                                  let dataCtr = data.cells;
                                  expect(dataCtr).to.be.an(Array);
                                  expect(dataCtr).to.not.be.empty();
                                  for (let p in dataCtr) {
                                    let data = dataCtr[p];
                                    expect(data).to.be.a(Edenai.InlineResponse2002Cells);
                                    expect(data.text).to.be.a('string');
                                    expect(data.text).to.be("");
                                    expect(data.rowSpan).to.be.a('number');
                                    expect(data.rowSpan).to.be();
                                    expect(data.colSpan).to.be.a('number');
                                    expect(data.colSpan).to.be();
                                    expect(data.confidence).to.be.a('number');
                                    expect(data.confidence).to.be();
                                    expect(data.boundingBox).to.be.a(Edenai.InlineResponse2002BoundingBox);
                                          expect(data.boundingBox.left).to.be.a('number');
                                      expect(data.boundingBox.left).to.be();
                                      expect(data.boundingBox.top).to.be.a('number');
                                      expect(data.boundingBox.top).to.be();
                                      expect(data.boundingBox.width).to.be.a('number');
                                      expect(data.boundingBox.width).to.be();
                                      expect(data.boundingBox.height).to.be.a('number');
                                      expect(data.boundingBox.height).to.be();
                    
                                          }
                                }
                
                                      }
                            }
            
                                  }
                        }
        
                              }
                    }
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ocr', function() {
        it('should call ocr successfully', function(done) {
          // TODO: uncomment, update parameter values for ocr call and complete the assertions
          /*
          var files = "/path/to/file.txt";
          var providers = "providers_example";
          var language = "language_example";

          instance.ocr(files, providers, language, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Edenai.InlineResponse2005);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Edenai.InlineResponse2005Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.solutionName).to.be("");
                expect(data.provider).to.be.a('string');
                expect(data.provider).to.be("");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.executionTime).to.be.a('number');
                expect(data.executionTime).to.be();
                expect(data.originalResult).to.be.a(Object);
                expect(data.originalResult).to.be();
                expect(data.result).to.be.a(Edenai.InlineResponse2005Result);
                      expect(data.result.text).to.be.a('string');
                  expect(data.result.text).to.be("");
                  {
                    let dataCtr = data.result.boundingBoxes;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Edenai.InlineResponse2005ResultBoundingBoxes);
                      expect(data.wordText).to.be.a('string');
                      expect(data.wordText).to.be("");
                      expect(data.left).to.be.a('number');
                      expect(data.left).to.be();
                      expect(data.top).to.be.a('number');
                      expect(data.top).to.be();
                      expect(data.width).to.be.a('number');
                      expect(data.width).to.be();
                      expect(data.hight).to.be.a('number');
                      expect(data.hight).to.be();
      
                            }
                  }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ocrInvoice', function() {
        it('should call ocrInvoice successfully', function(done) {
          // TODO: uncomment, update parameter values for ocrInvoice call and complete the assertions
          /*
          var files = "/path/to/file.txt";
          var providers = "providers_example";
          var language = "language_example";

          instance.ocrInvoice(files, providers, language, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Edenai.InlineResponse2006);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Edenai.InlineResponse2006Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.solutionName).to.be("");
                expect(data.provider).to.be.a('string');
                expect(data.provider).to.be("");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.executionTime).to.be.a('number');
                expect(data.executionTime).to.be();
                expect(data.originalResult).to.be.a(Object);
                expect(data.originalResult).to.be();
                {
                  let dataCtr = data.result;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Edenai.InlineResponse2006Result);
                    expect(data.text).to.be.a('string');
                    expect(data.text).to.be("");
                    {
                      let dataCtr = data.results;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Edenai.InlineResponse2006Results);
                        expect(data.wordText).to.be.a('string');
                        expect(data.wordText).to.be("");
                        expect(data.left).to.be.a('number');
                        expect(data.left).to.be();
                        expect(data.top).to.be.a('number');
                        expect(data.top).to.be();
                        expect(data.width).to.be.a('number');
                        expect(data.width).to.be();
                        expect(data.hight).to.be.a('number');
                        expect(data.hight).to.be();
                        expect(data.customerInformation).to.be.a(Edenai.InlineResponse2006CustomerInformation);
                              expect(data.customerInformation.customerAddress).to.be.a('string');
                          expect(data.customerInformation.customerAddress).to.be("");
                          expect(data.customerInformation.customerName).to.be.a('string');
                          expect(data.customerInformation.customerName).to.be("");
                        expect(data.merchantInformation).to.be.a(Edenai.InlineResponse2006MerchantInformation);
                              expect(data.merchantInformation.merchantAddress).to.be.a('string');
                          expect(data.merchantInformation.merchantAddress).to.be("");
                          expect(data.merchantInformation.merchantName).to.be.a('string');
                          expect(data.merchantInformation.merchantName).to.be("");
                        expect(data.invoiceTotal).to.be.a('string');
                        expect(data.invoiceTotal).to.be("");
                        expect(data.subtotal).to.be.a('string');
                        expect(data.subtotal).to.be("");
                        expect(data._date).to.be.a('string');
                        expect(data._date).to.be("");
                        expect(data.dueDate).to.be.a('string');
                        expect(data.dueDate).to.be("");
                        expect(data.invoiceNumber).to.be.a('string');
                        expect(data.invoiceNumber).to.be("");
                        expect(data.taxes).to.be.a('string');
                        expect(data.taxes).to.be("");
                        expect(data.locale).to.be.a(Edenai.InlineResponse2006Locale);
                              expect(data.locale.currency).to.be.a('string');
                          expect(data.locale.currency).to.be("");
                          expect(data.locale.language).to.be.a('string');
                          expect(data.locale.language).to.be("");
                        {
                          let dataCtr = data.itemLines;
                          expect(dataCtr).to.be.an(Array);
                          expect(dataCtr).to.not.be.empty();
                          for (let p in dataCtr) {
                            let data = dataCtr[p];
                            expect(data).to.be.a(Edenai.InlineResponse2006ItemLines);
                            expect(data.amount).to.be.a('string');
                            expect(data.amount).to.be("");
                            expect(data.description).to.be.a('string');
                            expect(data.description).to.be("");
                            expect(data.quantity).to.be.a('string');
                            expect(data.quantity).to.be("");
                            expect(data.unitPrice).to.be.a('string');
                            expect(data.unitPrice).to.be("");
            
                                  }
                        }
        
                              }
                    }
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ocrTables', function() {
        it('should call ocrTables successfully', function(done) {
          // TODO: uncomment, update parameter values for ocrTables call and complete the assertions
          /*
          var files = "/path/to/file.txt";
          var providers = "providers_example";
          var language = "language_example";

          instance.ocrTables(files, providers, language, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Edenai.InlineResponse2006);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Edenai.InlineResponse2006Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.solutionName).to.be("");
                expect(data.provider).to.be.a('string');
                expect(data.provider).to.be("");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.executionTime).to.be.a('number');
                expect(data.executionTime).to.be();
                expect(data.originalResult).to.be.a(Object);
                expect(data.originalResult).to.be();
                {
                  let dataCtr = data.result;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Edenai.InlineResponse2006Result);
                    expect(data.text).to.be.a('string');
                    expect(data.text).to.be("");
                    {
                      let dataCtr = data.results;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Edenai.InlineResponse2006Results);
                        expect(data.wordText).to.be.a('string');
                        expect(data.wordText).to.be("");
                        expect(data.left).to.be.a('number');
                        expect(data.left).to.be();
                        expect(data.top).to.be.a('number');
                        expect(data.top).to.be();
                        expect(data.width).to.be.a('number');
                        expect(data.width).to.be();
                        expect(data.hight).to.be.a('number');
                        expect(data.hight).to.be();
                        expect(data.customerInformation).to.be.a(Edenai.InlineResponse2006CustomerInformation);
                              expect(data.customerInformation.customerAddress).to.be.a('string');
                          expect(data.customerInformation.customerAddress).to.be("");
                          expect(data.customerInformation.customerName).to.be.a('string');
                          expect(data.customerInformation.customerName).to.be("");
                        expect(data.merchantInformation).to.be.a(Edenai.InlineResponse2006MerchantInformation);
                              expect(data.merchantInformation.merchantAddress).to.be.a('string');
                          expect(data.merchantInformation.merchantAddress).to.be("");
                          expect(data.merchantInformation.merchantName).to.be.a('string');
                          expect(data.merchantInformation.merchantName).to.be("");
                        expect(data.invoiceTotal).to.be.a('string');
                        expect(data.invoiceTotal).to.be("");
                        expect(data.subtotal).to.be.a('string');
                        expect(data.subtotal).to.be("");
                        expect(data._date).to.be.a('string');
                        expect(data._date).to.be("");
                        expect(data.dueDate).to.be.a('string');
                        expect(data.dueDate).to.be("");
                        expect(data.invoiceNumber).to.be.a('string');
                        expect(data.invoiceNumber).to.be("");
                        expect(data.taxes).to.be.a('string');
                        expect(data.taxes).to.be("");
                        expect(data.locale).to.be.a(Edenai.InlineResponse2006Locale);
                              expect(data.locale.currency).to.be.a('string');
                          expect(data.locale.currency).to.be("");
                          expect(data.locale.language).to.be.a('string');
                          expect(data.locale.language).to.be("");
                        {
                          let dataCtr = data.itemLines;
                          expect(dataCtr).to.be.an(Array);
                          expect(dataCtr).to.not.be.empty();
                          for (let p in dataCtr) {
                            let data = dataCtr[p];
                            expect(data).to.be.a(Edenai.InlineResponse2006ItemLines);
                            expect(data.amount).to.be.a('string');
                            expect(data.amount).to.be("");
                            expect(data.description).to.be.a('string');
                            expect(data.description).to.be("");
                            expect(data.quantity).to.be.a('string');
                            expect(data.quantity).to.be("");
                            expect(data.unitPrice).to.be.a('string');
                            expect(data.unitPrice).to.be("");
            
                                  }
                        }
        
                              }
                    }
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
